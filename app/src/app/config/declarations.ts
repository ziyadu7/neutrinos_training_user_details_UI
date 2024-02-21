// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-detailViewComponent
import { detailViewComponent } from '../components/userDetailsApp/listTable/detailView.component';
//CORE_REFERENCE_IMPORT-dataListTableComponent
import { dataListTableComponent } from '../components/userDetailsApp/listTable/dataListTable.component';
//CORE_REFERENCE_IMPORT-navBarComponent
import { navBarComponent } from '../components/userDetailsApp/Home/navBar.component';
//CORE_REFERENCE_IMPORT-addFormComponent
import { addFormComponent } from '../components/userDetailsApp/addForm/addForm.component';
//CORE_REFERENCE_IMPORT-userService
import { userService } from '../sd-services/userService';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-detailViewComponent
  detailViewComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dataListTableComponent
  dataListTableComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navBarComponent
  navBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addFormComponent
  addFormComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-userService
  userService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'addDetails', component: addFormComponent },
  { path: 'listDetails', component: dataListTableComponent },
  { path: 'detailView', component: detailViewComponent },
  { path: '', redirectTo: 'addDetails', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
