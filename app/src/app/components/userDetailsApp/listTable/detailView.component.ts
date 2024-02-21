// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, Input } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { userService } from 'app/sd-services/userService'; //_splitter_
import * as moment from 'moment'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-detailView',
  templateUrl: './detailView.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class detailViewComponent {
  @Input('id')
  public id: any = undefined;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_7x9AgBOMAesuBHIS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7x9AgBOMAesuBHIS(bh) {
    try {
      bh = this.sd_wKGVPlM8Yu1UsR24(bh);
      //appendnew_next_sd_7x9AgBOMAesuBHIS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7x9AgBOMAesuBHIS');
    }
  }

  //appendnew_flow_detailViewComponent_start

  sd_wKGVPlM8Yu1UsR24(bh) {
    try {
      bh = this.importingMoment(bh);
      //appendnew_next_sd_wKGVPlM8Yu1UsR24
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wKGVPlM8Yu1UsR24');
    }
  }

  importingMoment(bh) {
    try {
      this.page.moment = moment;
      bh = this.importingForm(bh);
      //appendnew_next_importingMoment
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OXa81nq5gFgF28WI');
    }
  }

  importingForm(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;
      bh = this.sd_OX3NlAh4RoSd1w0s(bh);
      //appendnew_next_importingForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U5VWzQasZSCDVCNg');
    }
  }

  sd_OX3NlAh4RoSd1w0s(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.local.query = route.snapshot.queryParams;
      bh = this.sd_kx36eL9wmCRAwsks(bh);
      //appendnew_next_sd_OX3NlAh4RoSd1w0s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OX3NlAh4RoSd1w0s');
    }
  }

  async sd_kx36eL9wmCRAwsks(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.fetchDetails(
        undefined,
        bh.local.query
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_0ANtjRCZQEKOiPFZ(bh);
      //appendnew_next_sd_kx36eL9wmCRAwsks
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kx36eL9wmCRAwsks');
    }
  }

  sd_0ANtjRCZQEKOiPFZ(bh) {
    try {
      const page = this.page;
      page.data = bh.local?.response?.data?.[0];
      page.details = [];
      page.data?.details?.forEach((detail: any) => {
        console.log(detail, 'detail consoling in foreach');
        page.details = [...page?.details, JSON.parse(detail)];
      });
      console.log(page.data, 'data');
      console.log(page.details, 'details');
      bh = this.declaringForm(bh);
      //appendnew_next_sd_0ANtjRCZQEKOiPFZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0ANtjRCZQEKOiPFZ');
    }
  }

  declaringForm(bh) {
    try {
      const page = this.page;
      const data = page.data;
      page.mainEditForm = new page.formGroup({
        name: new page.formControl(data?.name, [page.validator.required]),
        phone: new page.formControl(data?.phone, [page.validator.required]),
        email: new page.formControl(data?.email, [page.validator.required]),
        sex: new page.formControl(data?.sex, [page.validator.required]),
      });

      page.subDataEditForm = new page.formGroup({
        date: new page.formControl('', [page.validator.required]),
        country: new page.formControl('', [page.validator.required]),
        state: new page.formControl('', [page.validator.required]),
      });
      //appendnew_next_declaringForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dWwvhMQRNaXyc9WT');
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
  //appendnew_flow_detailViewComponent_Catch
}
