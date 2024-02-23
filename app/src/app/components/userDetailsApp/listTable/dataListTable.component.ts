// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { userService } from 'app/sd-services/userService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dataListTable',
  templateUrl: './dataListTable.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dataListTableComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_aHfwQXs6t3h4OhEr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_aHfwQXs6t3h4OhEr(bh) {
    try {
      bh = this.sd_yfYzMaiEO5w632rv(bh);
      //appendnew_next_sd_aHfwQXs6t3h4OhEr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aHfwQXs6t3h4OhEr');
    }
  }

  navigateToDetailViewPage(id: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id };
      bh.local = {};
      bh = this.sd_8xUGfZsHZxKZyurI(bh);
      //appendnew_next_navigateToDetailViewPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SuXqK5dgGBe1HXUQ');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sY6VRtk6t5ERyBmf');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2s8lYYNGoaBSuDA8');
    }
  }

  deleteData(id: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id };
      bh.local = {};
      bh = this.setingDeleteQueryData(bh);
      //appendnew_next_deleteData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FYZ9v5FJTdtuKKyf');
    }
  }
  //appendnew_flow_dataListTableComponent_start

  sd_yfYzMaiEO5w632rv(bh) {
    try {
      this.page.tableData = undefined;
      bh = this.sd_ByvEYHEgJj2LybVu(bh);
      //appendnew_next_sd_yfYzMaiEO5w632rv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yfYzMaiEO5w632rv');
    }
  }

  async sd_ByvEYHEgJj2LybVu(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.fetchDetails(undefined, {
        id: false,
      });
      bh.local.response = outputVariables.input.response;

      bh = this.sd_dnWBF4FmoIh15z4P(bh);
      //appendnew_next_sd_ByvEYHEgJj2LybVu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ByvEYHEgJj2LybVu');
    }
  }

  sd_dnWBF4FmoIh15z4P(bh) {
    try {
      const page = this.page;
      page.tableData = bh.local?.response?.data;
      //appendnew_next_sd_dnWBF4FmoIh15z4P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dnWBF4FmoIh15z4P');
    }
  }

  sd_8xUGfZsHZxKZyurI(bh) {
    try {
      const page = this.page;
      bh.local.query = { id: bh.input?.id };
      bh = this.sd_KwXSgby9bEsqM6cp(bh);
      //appendnew_next_sd_8xUGfZsHZxKZyurI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8xUGfZsHZxKZyurI');
    }
  }

  async sd_KwXSgby9bEsqM6cp(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/detailView');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.local.query),
        });
      //appendnew_next_sd_KwXSgby9bEsqM6cp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KwXSgby9bEsqM6cp');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L5oyfwOA8HmlVtIb');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      bh = this.sd_xKCCTWKzvgDN0rx7_3(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rQ7rJjgo2Zyda6cf');
    }
  }

  sd_xKCCTWKzvgDN0rx7_3(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_3(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_glrwM3pBpuNvvxgA');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_42PlQnzvNZrFnihs');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uAf0YAKYmqS3dgi5');
    }
  }

  setingDeleteQueryData(bh) {
    try {
      const page = this.page;
      bh.local.query = { id: bh.input?.id };
      console.log(bh.input.id);
      bh = this.callingDeleteService(bh);
      //appendnew_next_setingDeleteQueryData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gix7sobcjnJkYRtf');
    }
  }

  async callingDeleteService(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.deleteEntireData(
        bh.local.query,
        undefined
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_GNRkQxB2JNv9VaGK(bh);
      //appendnew_next_callingDeleteService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TfLa36eRKD0Ieu4U');
    }
  }

  sd_GNRkQxB2JNv9VaGK(bh) {
    try {
      const page = this.page;
      console.log(bh.local.response);
      bh = this.sd_8DFJStLChBbyLXL9(bh);
      //appendnew_next_sd_GNRkQxB2JNv9VaGK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GNRkQxB2JNv9VaGK');
    }
  }

  sd_8DFJStLChBbyLXL9(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.response.message, 'done', {
          duration: 2500,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_ByvEYHEgJj2LybVu(bh);
      //appendnew_next_sd_8DFJStLChBbyLXL9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8DFJStLChBbyLXL9');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_dataListTableComponent_Catch
}
