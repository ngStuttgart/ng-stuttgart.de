import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'embeddify'
})
export class EmbeddifyPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    const docsRegex = new RegExp(
      '^https:\\/\\/docs\\.google\\.com\\/presentation(?:\\/d)?(?:\\/e)?\\/[0-9a-zA-Z-_]*'
    );
    const driveRegex = new RegExp(
      '^https:\\/\\/drive\\.google\\.com\\/file\\/d\\/[0-9a-zA-Z-_]*'
    );
    if (docsRegex.test(value))
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        docsRegex.exec(value)[0] + '/embed?start=false'
      );
    if (driveRegex.test(value))
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        driveRegex.exec(value)[0] + '/preview'
      );
    return null;
  }
}
