import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input()
  public url!: string;

  @Input()
  public alt: string = "image";

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error("Url property is required");
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
