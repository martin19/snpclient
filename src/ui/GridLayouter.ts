export interface Grid {
  cols : number[], //percentages of full width
  rows : number[], //percentages of full height
}

export class GridLayouter {
  container : HTMLElement;
  constructor(container:HTMLElement) {
    this.container = container;
  }
  layout(grid:Grid) {
    const streams = this.container.children;

    //compute absolute positions and sizes
    let cells = [];
    let y0 = 0;
    let x0 = 0;
    for(let y = 0; y < grid.rows.length; y++) {
      x0 = 0;
      for(let x = 0; x < grid.cols.length; x++) {
        cells.push({ x : x0 + "%", y : y0 + "%", w : grid.cols[x] + "%", h : grid.rows[y] + "%"});
        x0 += grid.cols[x];
      }
      y0 += grid.rows[y];
    }

    for(let i = 0; i < streams.length; i++) {
      let el = streams.item(i) as HTMLElement|null;
      if(el && cells[i]) {
        el.style.position = "absolute";
        el.style.left = cells[i].x;
        el.style.top = cells[i].y;
        el.style.width = cells[i].w;
        el.style.height = cells[i].h;
        // el.style.display = "block";
        el.style.opacity = "1";
      } else {
        el.style.position = "absolute";
        // el.style.display = "none";
        el.style.opacity = "0";
        el.style.left = "50%";
        el.style.top = "50%";
        el.style.width = "0";
        el.style.height = "0";
      }
    }
  }
}