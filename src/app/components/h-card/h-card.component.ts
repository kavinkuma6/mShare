import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import 'leader-line';
declare let LeaderLine: any;

@Component({
  selector: 'app-h-card',
  templateUrl: './h-card.component.html',
  styleUrls: ['./h-card.component.scss'],
})
export class HCardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  data = {
    title: '9 Highly Cliched But Still Brilliant Books For Backpackers',
    subTitles: [
      {
        subTitle: 'On The Road – Jack Kerouac',
        subBody:
          'Inspired by roadtrips taken in the US in the 1940s, where drugs, jazz music and poetry were the de',
      },
      {
        subTitle: 'Fear & Loathing In Las Vegas – Hunter S. Thompson',
        subBody:
          'This one follows another set of dreamchasers, this time they’re chasing the American Dream all the way t',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
      {
        subTitle: 'Into The Wild – Jon Krakauer',
        subBody:
          'The tragic story of a solo adventure into the wilderness of Alaska, specifically Denali Park, which has to be',
      },
    ],
  };
  c = {
    no: 1,
    line: {},
    position: {
      x: 0,
      y: 0,
    },
  };
  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // this.cards.forEach((c, i) => {
    //   if (i + 2 !== this.cards.length) {
    //     c['line'] = new LeaderLine(
    //       this.document.getElementById(`s${i + 1}`),
    //       this.document.getElementById(`e${i + 2}`),
    //       {
    //         endLabel: LeaderLine.pathLabel(
    //           'This is additional label long descriptis'
    //         ),
    //       }
    //     );
    //   }
    // });
  }
  dragEnded_new(event: any) {
    // this.line.position();
  }
  cdkDragMoved() {
    // this.cards.forEach((c) => {
    //   const l: any = c.line;
    //   l?.position();
    // });
  }

  reset() {
    // this.cards.forEach((c) => (c.position = { x: 0, y: 0 }));
  }
}
