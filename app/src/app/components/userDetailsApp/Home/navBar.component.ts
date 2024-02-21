// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-navBar',
  templateUrl: './navBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class navBarComponent {
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
      this.sd_DNs9MY1vV9FIB2jJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DNs9MY1vV9FIB2jJ(bh) {
    try {
      bh = this.sd_HuugFieQEdHrNoZ7(bh);
      //appendnew_next_sd_DNs9MY1vV9FIB2jJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DNs9MY1vV9FIB2jJ');
    }
  }

  routing(route: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { route };
      bh.local = {};
      bh = this.routingToPages(bh);
      //appendnew_next_routing
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ONbrqKvkEgIDuIdY');
    }
  }
  //appendnew_flow_navBarComponent_start

  sd_HuugFieQEdHrNoZ7(bh) {
    try {
      //appendnew_next_sd_HuugFieQEdHrNoZ7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HuugFieQEdHrNoZ7');
    }
  }

  async routingToPages(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.route);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_routingToPages
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AFqr1ndM3HbsgQOJ');
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
  //appendnew_flow_navBarComponent_Catch
}
