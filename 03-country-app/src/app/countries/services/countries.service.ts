import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byRegion: { region: undefined, countries: [] },
    byCountry: { term: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    const valueLocalStorage = localStorage.getItem('cacheStore');
    if (!valueLocalStorage) return;

    this.cacheStore = JSON.parse(valueLocalStorage);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError((_) => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((_) => of(null)),
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`).pipe(
      tap((countries) => {
        this.cacheStore.byCapital = { term, countries };
      }),
      tap(() => this.saveToLocalStorage()),
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/region/${region}`).pipe(
      tap((countries) => {
        this.cacheStore.byRegion = { region, countries };
      }),
      tap(() => this.saveToLocalStorage()),
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/name/${term}`).pipe(
      tap((countries) => {
        this.cacheStore.byCountry = { term, countries };
      }),
      tap(() => this.saveToLocalStorage()),
    );
  }
}
