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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
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
  @Input('response')
  public response: any = undefined;
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

  modalFormManaging(
    action: any = undefined,
    editData: any = undefined,
    ...others
  ) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action, editData };
      bh.local = {};
      bh = this.settingModal(bh);
      //appendnew_next_modalFormManaging
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g1IfUruqm8py3ena');
    }
  }

  afterEdit(newDatas: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { newDatas };
      bh.local = {};
      bh = this.settingAfterEdit(bh);
      //appendnew_next_afterEdit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NJ9s9hekZd3Msghc');
    }
  }

  submitMainForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.submitFormValidation(bh);
      //appendnew_next_submitMainForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GtNT9KkDIOx5W3qm');
    }
  }

  fileUploading(file: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { file };
      bh.local = {};
      bh = this.fileValidation(bh);
      //appendnew_next_fileUploading
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5fKPNtTiBiDWif8y');
    }
  }
  //appendnew_flow_detailViewComponent_start

  sd_wKGVPlM8Yu1UsR24(bh) {
    try {
      this.page.modalFormOpen = 'false';
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
      console.log(bh.local?.response?.data?.[0], 'details');
      page.data = bh.local?.response?.data?.[0];
      page.details = [];
      page.data?.details?.forEach((detail: any, index: number) => {
        page.details = [...page?.details, { ...JSON.parse(detail), index }];
      });
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

  settingModal(bh) {
    try {
      const page = this.page;
      page.editData = bh.input?.editData;
      JSON.stringify(bh.input?.editData);
      page.modalFormOpen = bh?.input?.action == 'open' ? true : false;
      //appendnew_next_settingModal
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xV3zQTFVvwFyXLhq');
    }
  }

  settingAfterEdit(bh) {
    try {
      const page = this.page;
      let newData = bh.input.newDatas;

      if (newData?.isNew) {
        console.log('new aanuuuuuuuuuuuuuuuuuu');
        page.details = [
          ...page?.details,
          { ...newData, index: page?.details?.length },
        ];
      } else {
        console.log('edit aanuuuuuuuuuuuuuuuuuu');
        const details = page?.details;
        page.details = [];
        details?.forEach((detail: any, index: number) => {
          if (newData.index == index) {
            page.details = [...page?.details, { ...newData }];
          } else {
            page.details = [...page?.details, detail];
          }
        });
      }

      page.modalFormOpen = false;

      //appendnew_next_settingAfterEdit
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LtzaMcsrrNah7CCk');
    }
  }

  submitFormValidation(bh) {
    try {
      const page = this.page;
      function validateEmail(email: any) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      function validateMobile(phone: any) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
      }

      if (page?.mainEditForm?.value?.name?.trim().length == 0) {
        page.mainEditForm.get('name').status = 'INVALID';
        return;
      }

      if (page?.mainEditForm?.value?.sex?.trim().length == 0) {
        page.mainEditForm.get('sex').status = 'INVALID';
        return;
      }

      if (!validateMobile(page?.mainEditForm?.value?.phone)) {
        page.mainEditForm.get('phone').errors = {
          regex_error: true,
        };
        page.mainEditForm.get('phone').status = 'INVALID';
        return;
      }

      if (!validateEmail(page?.mainEditForm?.value?.email)) {
        page.mainEditForm.get('email').errors = {
          regex_error: true,
        };
        page.mainEditForm.get('email').status = 'INVALID';
        return;
      }

      const formData = new FormData();

      const detailsJSON = JSON.stringify(page?.details);
      const file = page?.file ? page?.file : [];

      console.log(file, 'file consoling at submit page');

      const isNumberChange =
        page?.mainEditForm?.value?.phone == page?.data?.phone ? false : true;

      console.log(
        isNumberChange,
        page?.mainEditForm?.value?.phone,
        page?.data?.phone
      );

      formData.append('name', page?.mainEditForm?.value?.name);
      formData.append('phone', page?.mainEditForm?.value?.phone);
      formData.append('email', page?.mainEditForm?.value?.email);
      formData.append('sex', page?.mainEditForm?.value?.sex);
      formData.append('id', page?.data?.id);
      formData.append('file', file);
      formData.append('details', detailsJSON);

      page.body = formData;
      bh.local.query = { isNumberChange: isNumberChange };

      bh = this.submitCallService(bh);
      //appendnew_next_submitFormValidation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PuoqrboivG0zZycS');
    }
  }

  async submitCallService(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.updateDetails(
        undefined,
        this.page.body,
        bh.local.query
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_FtX8idw3PRLfOrII(bh);
      //appendnew_next_submitCallService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JKyhXe9YBWAdJpTt');
    }
  }

  sd_FtX8idw3PRLfOrII(bh) {
    try {
      const page = this.page;
      console.log(bh.local.response);
      bh = this.sd_8HbYx08mU9m1MA8H(bh);
      //appendnew_next_sd_FtX8idw3PRLfOrII
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FtX8idw3PRLfOrII');
    }
  }

  sd_8HbYx08mU9m1MA8H(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response.statusCode,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ABTpVE5EM7CUooGk(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8HbYx08mU9m1MA8H');
    }
  }

  sd_ABTpVE5EM7CUooGk(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.response.message, 'Ok', {
          duration: 2500,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_pDuIxgiLL1BS3WgE(bh);
      //appendnew_next_sd_ABTpVE5EM7CUooGk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ABTpVE5EM7CUooGk');
    }
  }

  async sd_pDuIxgiLL1BS3WgE(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/listDetails');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_pDuIxgiLL1BS3WgE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pDuIxgiLL1BS3WgE');
    }
  }

  fileValidation(bh) {
    try {
      const page = this.page;
      console.log(bh.input?.file, 'file uploading');
      page.file = bh.input?.file;

      if (!isValidImage(page?.file)) {
        throw {
          message: 'Add valid image or pdf',
        };
      }

      function isValidImage(file: any) {
        const acceptedImageTypes = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/webp',
          'application/pdf',
        ];
        return acceptedImageTypes.includes(file?.type);
      }
      //appendnew_next_fileValidation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mbAj65IAQyD8mVP1');
    }
  }

  sd_bdmUYiJWhkiJZjHl(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.message, 'Ok', {
        duration: 2500,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_bdmUYiJWhkiJZjHl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bdmUYiJWhkiJZjHl');
    }
  }

  errorSetting(bh) {
    try {
      const page = this.page;
      console.log(bh.error, 'error consoling');
      const colonIndex = bh.error?.error?.indexOf(':');

      const atIndex = bh.error?.error?.indexOf(' at', colonIndex);

      bh.error.message = bh.error?.error?.substring(colonIndex + 1, atIndex);
      console.log(bh.error.message, 'error message consoling');
      bh = this.sd_uQC2hlU8QoVRrMGE(bh);
      //appendnew_next_errorSetting
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NmhPLlSgb1EEjnU');
    }
  }

  sd_uQC2hlU8QoVRrMGE(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.message, 'Ok', {
        duration: 2500,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_uQC2hlU8QoVRrMGE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uQC2hlU8QoVRrMGE');
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
    if (
      false ||
      this.sd_NMGTTIxHfMKDwJC9(bh) ||
      this.sd_V2xQgBeyv33ljnSm(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_NMGTTIxHfMKDwJC9(bh) {
    const nodes = ['sd_5fKPNtTiBiDWif8y', 'sd_mbAj65IAQyD8mVP1'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_bdmUYiJWhkiJZjHl(bh);
      //appendnew_next_sd_NMGTTIxHfMKDwJC9
      return true;
    }
    return false;
  }
  sd_V2xQgBeyv33ljnSm(bh) {
    const nodes = [
      'sd_GtNT9KkDIOx5W3qm',
      'sd_PuoqrboivG0zZycS',
      'sd_JKyhXe9YBWAdJpTt',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = this.errorSetting(bh);
      //appendnew_next_sd_V2xQgBeyv33ljnSm
      return true;
    }
    return false;
  }
  //appendnew_flow_detailViewComponent_Catch
}
