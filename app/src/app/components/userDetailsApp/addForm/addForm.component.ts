// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { userService } from 'app/sd-services/userService'; //_splitter_
import * as moment from 'moment'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-addForm',
  templateUrl: './addForm.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class addFormComponent {
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
      this.sd_xruxtPfKqjyXEa7M(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xruxtPfKqjyXEa7M(bh) {
    try {
      bh = this.sd_bXS2CPA9OO84gWOO(bh);
      //appendnew_next_sd_xruxtPfKqjyXEa7M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xruxtPfKqjyXEa7M');
    }
  }

  selectStates(country: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { country };
      bh.local = {};
      bh = this.sd_Luo5adr2QfrY3tFb(bh);
      //appendnew_next_selectStates
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IsIvBvyRbEMo1xQz');
    }
  }

  getWeatherDetails(state: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { state };
      bh.local = {};
      bh = this.sd_jkUHSGLQlaSb8fMP(bh);
      //appendnew_next_getWeatherDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HhMmSQ3EjzeFMjKM');
    }
  }

  addDetails(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_N0u9IUWfoJcHbRao(bh);
      //appendnew_next_addDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qpD2nZDVPHn8Yw8D');
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
      return this.errorHandler(bh, e, 'sd_PkZ4u6T0TUszG3fN');
    }
  }

  setGender(sex: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { sex };
      bh.local = {};
      bh = this.sd_OcHhBTndw7w5hI5B(bh);
      //appendnew_next_setGender
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yFh6iSmGdWLEX5Az');
    }
  }

  onDateChanges(date: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date };
      bh.local = {};
      bh = this.sd_lMz4D11deh69f0i1(bh);
      //appendnew_next_onDateChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JhNRXd5cJpliQaTc');
    }
  }

  submitForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3BjrpbuhSZEOtkVl(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yWwKfKx6vpz7e2tR');
    }
  }

  commonValidation(isOk = false, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { isOk };
      bh.local = {};
      bh = this.commonValidationScript(bh);
      //appendnew_next_commonValidation
      return bh.input.isOk;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dahiq9z01Rv2fzyF');
    }
  }
  //appendnew_flow_addFormComponent_start

  sd_bXS2CPA9OO84gWOO(bh) {
    try {
      this.page.gender = 'male';
      this.page.file = undefined;
      this.page.data = undefined;
      bh = this.importingMoment(bh);
      //appendnew_next_sd_bXS2CPA9OO84gWOO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bXS2CPA9OO84gWOO');
    }
  }

  importingMoment(bh) {
    try {
      this.page.moment = moment;
      bh = this.importingForm(bh);
      //appendnew_next_importingMoment
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LL7ZcPojxP9qzo9Q');
    }
  }

  importingForm(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;
      bh = this.declaringForm(bh);
      //appendnew_next_importingForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XNlLrEw1IGnmi8OT');
    }
  }

  declaringForm(bh) {
    try {
      const page = this.page;
      page.addForm = new page.formGroup({
        name: new page.formControl('', [page.validator.required]),
        phone: new page.formControl('', [page.validator.required]),
        date: new page.formControl('', [page.validator.required]),
        dateNow: new page.formControl(moment().format('YYYY-MM-DD'), [
          page.validator.required,
        ]),
        email: new page.formControl('', [page.validator.required]),
        country: new page.formControl('', [page.validator.required]),
        state: new page.formControl('', [page.validator.required]),
      });
      bh = this.sd_jflwWEx5qOhBS50c(bh);
      //appendnew_next_declaringForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zgpisejEnqH88WgS');
    }
  }

  async sd_jflwWEx5qOhBS50c(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.fetchCountryAndState(
        undefined
      );
      this.page.countries = outputVariables.input.result;

      bh = this.sd_DXHEI53wQ8ohi07x(bh);
      //appendnew_next_sd_jflwWEx5qOhBS50c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jflwWEx5qOhBS50c');
    }
  }

  sd_DXHEI53wQ8ohi07x(bh) {
    try {
      const page = this.page;
      console.log(page?.countries, 'country and state data');
      page.countries = page?.countries?.data;
      //appendnew_next_sd_DXHEI53wQ8ohi07x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DXHEI53wQ8ohi07x');
    }
  }

  sd_Luo5adr2QfrY3tFb(bh) {
    try {
      const page = this.page;
      console.log(bh.input?.country?.value?.states, 'states');
      page.country = bh.input?.country?.value;
      page.weatherDate = 0;
      page.states = bh.input?.country?.value?.states;
      //appendnew_next_sd_Luo5adr2QfrY3tFb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Luo5adr2QfrY3tFb');
    }
  }

  sd_jkUHSGLQlaSb8fMP(bh) {
    try {
      const page = this.page;
      page.state = bh?.input?.state?.value;
      console.log(bh?.input?.state?.value, 'state on change working');
      bh = this.sd_3mqTX6Wo7yHvOzTn(bh);
      //appendnew_next_sd_jkUHSGLQlaSb8fMP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jkUHSGLQlaSb8fMP');
    }
  }

  async sd_3mqTX6Wo7yHvOzTn(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.fetchWeatherData(
        bh.input.state.value,
        undefined,
        this.page.country.name
      );
      bh.local.result = outputVariables.input.result;

      bh = this.sd_MsYOEQ5tZ0HHu8Fh(bh);
      //appendnew_next_sd_3mqTX6Wo7yHvOzTn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3mqTX6Wo7yHvOzTn');
    }
  }

  sd_MsYOEQ5tZ0HHu8Fh(bh) {
    try {
      const page = this.page;
      console.log(bh.local.result, 'weather result showing flow page');
      page.weatherDetails = bh.local?.result;
      //appendnew_next_sd_MsYOEQ5tZ0HHu8Fh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MsYOEQ5tZ0HHu8Fh');
    }
  }

  sd_N0u9IUWfoJcHbRao(bh) {
    try {
      let outputVariables = this.commonValidation(undefined);
      bh.input.isOK = outputVariables;

      bh = this.formValidation(bh);
      //appendnew_next_sd_N0u9IUWfoJcHbRao
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N0u9IUWfoJcHbRao');
    }
  }

  formValidation(bh) {
    try {
      const page = this.page;
      bh.local.data = page?.addForm?.value;

      if (bh?.input?.isOk == false) {
        return;
      }

      if (!page?.addForm?.value?.country) {
        page.addForm.get('country').status = 'INVALID';
        return;
      }

      if (!page?.addForm?.value?.state) {
        page.addForm.get('state').status = 'INVALID';
        return;
      }

      // if(!page?.weatherDetails){
      //       throw {
      //         message:'Weather details not get'
      //     }
      // }

      if (!page?.addForm?.value?.date) {
        page.addForm.get('date').status = 'INVALID';
        return;
      }

      if (page?.data?.details) {
        page.data = {
          name: page?.addForm?.value?.name,
          phone: page?.addForm?.value?.phone,
          email: page?.addForm?.value?.email,
          sex: page?.gender,
          details: [
            ...page?.data?.details,
            {
              date: page?.addForm?.value?.date,
              currentDate: page?.date?.currentDate,
              dateDiff: page?.date?.difference,
              weather: page?.weatherDetails?.main?.feels_like,
              country: page?.country?.name,
              state: page?.state,
            },
          ],
        };
      } else {
        page.data = {
          name: page?.addForm?.value?.name,
          phone: page?.addForm?.value?.phone,
          email: page?.addForm?.value?.email,
          sex: page?.gender,
          details: [
            {
              date: page?.addForm?.value?.date,
              currentDate: page?.date?.currentDate,
              dateDiff: page?.date?.difference,
              weather: page?.weatherDetails?.main?.feels_like,
              country: page?.country?.name,
              state: page?.state,
            },
          ],
        };
      }

      bh.local.response = {
        message: 'value add successfully',
        status: 'true',
      };
      bh = this.sd_Yh2eTPlxczucOMU8(bh);
      //appendnew_next_formValidation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s7DGOfXxkeG32P5v');
    }
  }

  sd_Yh2eTPlxczucOMU8(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response.status,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_kxC69d2H284tln6e(bh);
        bh = this.sd_hDW1MI8ShFiMKhLV(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yh2eTPlxczucOMU8');
    }
  }

  sd_kxC69d2H284tln6e(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.response.message, 'Ok', {
          duration: 2500,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_kxC69d2H284tln6e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kxC69d2H284tln6e');
    }
  }

  sd_hDW1MI8ShFiMKhLV(bh) {
    try {
      const page = this.page;
      (page.weather = {}), (page.country = ''), (page.state = '');
      page.date = {};

      console.log(page?.data, 'appo ellam complete aay tto');

      //appendnew_next_sd_hDW1MI8ShFiMKhLV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hDW1MI8ShFiMKhLV');
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
          'image/avif',
          'image/png',
          'image/webp',
          'application/pdf',
        ];
        return acceptedImageTypes.includes(file?.type);
      }
      //appendnew_next_fileValidation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z7DDQBUc3NP29BPH');
    }
  }

  sd_OcHhBTndw7w5hI5B(bh) {
    try {
      const page = this.page;
      page.gender = bh.input?.sex;
      console.log(page.gender, 'sex consling');
      //appendnew_next_sd_OcHhBTndw7w5hI5B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OcHhBTndw7w5hI5B');
    }
  }

  sd_kRR9cHkE9xUbFXT8(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.error.message, 'Ok', {
        duration: 2500,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_kRR9cHkE9xUbFXT8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kRR9cHkE9xUbFXT8');
    }
  }

  sd_lMz4D11deh69f0i1(bh) {
    try {
      const page = this.page;
      console.log(bh?.input?.date, 'date consoling');
      let date: any = new Date(bh.input.date);
      const currentDate: any = new Date();
      console.log(
        Math.abs(currentDate.getTime() - date.getTime()),
        'date difference consoling'
      );

      const timeDifferenceMs = Math.abs(currentDate.getTime() - date.getTime());

      const daysDifference = Math.floor(
        timeDifferenceMs / (1000 * 60 * 60 * 24)
      );

      const hoursDifference = Math.floor(
        (timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      page.date = {
        difference: `${daysDifference} Days ${hoursDifference} Hours`,
        currentDate: currentDate,
        date: date,
      };
      //appendnew_next_sd_lMz4D11deh69f0i1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lMz4D11deh69f0i1');
    }
  }

  sd_3BjrpbuhSZEOtkVl(bh) {
    try {
      let outputVariables = this.commonValidation(undefined);
      bh.input.isOk = outputVariables;

      bh = this.sd_AwEdxrP3ehCvL79i(bh);
      //appendnew_next_sd_3BjrpbuhSZEOtkVl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3BjrpbuhSZEOtkVl');
    }
  }

  sd_AwEdxrP3ehCvL79i(bh) {
    try {
      const page = this.page;
      if (bh?.input?.isOk == false) {
        return;
      }

      function isValidImage(file: any) {
        const acceptedImageTypes = [
          'image/jpeg',
          'image/jpg',
          'image/avif',
          'image/png',
          'image/webp',
          'application/pdf',
        ];
        return acceptedImageTypes.includes(file?.type);
      }

      if (!isValidImage(page?.file)) {
        throw {
          message: 'Add valid image or pdf',
        };
      }

      if (!page?.data) {
        throw {
          message: 'Add details',
        };
      }

      const formData = new FormData();

      const detailsJSON = JSON.stringify(page?.data?.details);

      formData.append('name', page?.data?.name);
      formData.append('phone', page?.data?.phone);
      formData.append('email', page?.data?.email);
      formData.append('sex', page?.data?.sex);
      formData.append('file', page?.file);
      formData.append('details', detailsJSON);

      page.data = formData;

      bh = this.callingSubmitService(bh);
      //appendnew_next_sd_AwEdxrP3ehCvL79i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AwEdxrP3ehCvL79i');
    }
  }

  async callingSubmitService(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.addDetails(
        this.page.data,
        undefined
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_OgjfcqFsByEZ1MUq(bh);
      //appendnew_next_callingSubmitService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yoFs96Eg9zPYLT82');
    }
  }

  sd_OgjfcqFsByEZ1MUq(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.response.statusCode,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_dZmzzgWqwe6QkL1m(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OgjfcqFsByEZ1MUq');
    }
  }

  async sd_dZmzzgWqwe6QkL1m(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/listDetails');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_dZmzzgWqwe6QkL1m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dZmzzgWqwe6QkL1m');
    }
  }

  commonValidationScript(bh) {
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

      if (page?.addForm?.value?.name?.trim().length == 0) {
        page.addForm.get('name').status = 'INVALID';
        return;
      }

      if (!validateMobile(page?.addForm?.value?.phone)) {
        page.addForm.get('phone').errors = {
          regex_error: true,
        };
        page.addForm.get('phone').status = 'INVALID';
        return;
      }

      if (!validateEmail(page?.addForm?.value?.email)) {
        page.addForm.get('email').errors = {
          regex_error: true,
        };
        page.addForm.get('email').status = 'INVALID';
        return;
      }

      bh.input.isOk = true;

      //appendnew_next_commonValidationScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_obPjYTbMuf09LNtG');
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
      this.sd_crfgDEX1KmBStY8F(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_crfgDEX1KmBStY8F(bh) {
    const catchConnectedNodes = ['sd_kRR9cHkE9xUbFXT8'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_kRR9cHkE9xUbFXT8(bh);
    //appendnew_next_sd_crfgDEX1KmBStY8F
    return true;
  }
  //appendnew_flow_addFormComponent_Catch
}
