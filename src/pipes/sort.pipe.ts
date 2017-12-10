import { Pipe } from '@angular/core';

/**
 * Sorts our waitTimes
 */
@Pipe({ name: "sortBy" })
export class SortPipe {
  transform(array: Array<number>, args: string): Array<number> {
    array.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
