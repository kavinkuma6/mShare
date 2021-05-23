import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import 'leader-line';
declare let LeaderLine: any;

@Component({
  selector: 'app-h-card',
  templateUrl: './h-card.component.html',
  styleUrls: ['./h-card.component.scss'],
})
export class HCardComponent implements OnInit, AfterViewInit {
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
    ],
  };
  cards = [
    {
      no: 1,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 2,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 3,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 4,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 5,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 6,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 7,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 8,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 9,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 10,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 11,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 12,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      no: 13,
      line: {},
      position: {
        x: 0,
        y: 0,
      },
    },
  ];
  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.cards.forEach((c, i) => {
      if (i + 2 !== this.cards.length) {
        c['line'] = new LeaderLine(
          this.document.getElementById(`s${i + 1}`),
          this.document.getElementById(`e${i + 2}`),
          {
            endLabel: LeaderLine.pathLabel(
              'This is additional label long descriptis'
            ),
          }
        );
      }
    });
  }
  dragEnded_new(event: any) {
    // this.line.position();
  }
  cdkDragMoved() {
    this.cards.forEach((c) => {
      const l: any = c.line;
      l?.position();
    });
  }

  reset() {
    this.cards.forEach((c) => (c.position = { x: 0, y: 0 }));
  }
}
