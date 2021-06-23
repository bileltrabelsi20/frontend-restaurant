import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../../shared/products-carousel/product-dialog/product-dialog.component';
import { AppService } from '../../app.service';
import { Category } from "../../app.models";
import { Settings, AppSettings } from 'src/app/app.settings';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: any;
  public sidenavOpen: boolean = true;
  private sub: any;
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public counts = [3, 24, 36];
  public count: any;
  // public sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
  public sort: any;
  // public products = [] as any;
  public allSandwich = [] as any;
  public allBurger = [] as any;
  public allTacos = [] as any;
  public categories: Category[];
  public brands = [];
  public priceFrom: number = 1;
  public priceTo: number = 10;
  public page: any;
  public settings: Settings;
  snackBar: any;
  constructor(public appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    public appService: AppService,
    public dialog: MatDialog,
    private router: Router,
    public product: ProductsService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.count = this.counts[0];
    this.sub = this.activatedRoute.params.subscribe(params => {
    });
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    };
    if (window.innerWidth < 1280) {
      this.viewCol = 33.3;
    };


    this.getAllSandwich();
    this.getAllTacos();
    this.getAllBurger();
  }

  ////////////////////////// filter with checkbox ///////////////////////////

  checkboxArray: any = [
    {
      id: 1,
      type: "checkbox",
      genre: "Sandwiches",
      contenu: this.allSandwich
    },
    {
      id: 2,
      type: "checkbox",
      genre: "Tacos",
      contenu: this.allTacos,

    },
    {
      id: 3,
      type: "checkbox",
      genre: "Burgers",
      contenu: this.allBurger

    },
  ]

  ///////////////////////////////////////////////////////////////////////////
  data: any = []
  getAllSandwich() {
    this.product.getAllSandwich().subscribe(data => {
      this.allSandwich = data;
      // console.log(this.allSandwich);

    })
  }
  getAllBurger() {
    this.product.getAllBurger().subscribe(data => {
      this.allBurger = data;
    })
  }
  getAllTacos() {
    this.product.getAllTacos().subscribe(data => {
      this.allTacos = data;
    })
  }

  public getCategories() {
    if (this.appService.Data.categories.length == 0) {
      this.appService.getCategories().subscribe(data => {
        this.categories = data;
        this.appService.Data.categories = data;
      });
    }
    else {
      this.categories = this.appService.Data.categories;
    }
  }

  public getBrands() {
    this.brands = this.appService.getBrands();
    this.brands.forEach(brand => { brand.selected = false });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    (window.innerWidth < 1280) ? this.viewCol = 33.3 : this.viewCol = 25;
  }

  public changeCount(count) {
    this.count = count;
  }


  public changeSorting(sort) {
    this.sort = sort;
  }

  public changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;
  }

  public openProductDialog(product) {
    let dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
      panelClass: 'product-dialog',
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(product => {
      if (product) {
        this.router.navigate(['/products', product.id, product.name]);
      }
    });
  }

  public onPageChanged(event) {
    this.page = event;
    this.getAllSandwich();
    this.getAllTacos();
    this.getAllBurger();
    window.scrollTo(0, 0);
  }

  public onChangeCategory(event) {
    if (event.target) {
      this.router.navigate(['/products', event.target.innerText.toLowerCase()]);
    }
  }

  ///////////////////////// filter with chexbox /////////////////////////////
  tempArray: any = [];
  newArray: any = [];

  showTacos: boolean = true;
  showBurgers: boolean = true;
  showSandwiches: boolean = true;


  onChange(event: any) {
    console.log(event.target.checked);
    if (event.target.value == 1 && event.target.checked) {
      this.showSandwiches = true;
    }
    else {
      this.showSandwiches = false;
      // this.showTacos = true;
      // this.showBurgers = true;


    }

    if (event.target.value == 2 && event.target.checked) {
      this.showTacos = true;
    }

    else {
      this.showTacos = false;
      // this.showSandwiches = true;
      // this.showBurgers = true;

    }
    if (event.target.value == 3 && event.target.checked) {
      this.showBurgers = true;

    }
    else {
      this.showBurgers = false;
      // this.showSandwiches = true;
      // this.showTacos = true;


    }
    // (event.target.value == 1 && event.target.checked)&&(event.target.value == 2 && event.target.checked)(event.target.value == 3 && event.target.checked)
    // if( event.target.checked){
    //   this.showSandwiches = true;
    //   this.showBurgers = true;
    //   this.showTacos = true;

    // }
    // else{
    //   this.showBurgers = false;
    //   this.showTacos = false;
    //   this.showSandwiches = false;

    // }


  }
}
