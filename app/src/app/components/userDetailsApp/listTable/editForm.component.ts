// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { userService } from 'app/sd-services/userService'; //_splitter_
import * as moment from 'moment'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-editForm',
  templateUrl: './editForm.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class editFormComponent {
  @Input('editData')
  public editData: any = undefined;
  @Output('response')
  public response: any = new EventEmitter<any>();
  @Output('closeModal')
  public closeModal: any = new EventEmitter<any>();
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
      this.sd_A4o9swdkg3n91oaO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_A4o9swdkg3n91oaO(bh) {
    try {
      bh = this.sd_myLyHmKal0GdFosF(bh);
      //appendnew_next_sd_A4o9swdkg3n91oaO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A4o9swdkg3n91oaO');
    }
  }

  closeModalFunction(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_HyX1yQTbLTLvJ7GI(bh);
      //appendnew_next_closeModalFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z5UqhFf7P8tO74Zn');
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
      bh = this.sd_mXhlbHmHuu6MfABT(bh);
      //appendnew_next_selectStates
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ftrjuVFoYNEIHCL');
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
      bh = this.sd_8HL7BJnAzHJyC0en(bh);
      //appendnew_next_getWeatherDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WN6wEAK7yBUgUtmr');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.submitValidation(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S635ZMAuVJOm83cb');
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
      bh = this.sd_LWRSZWerhqSeYfLg(bh);
      //appendnew_next_onDateChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7ESyXcoibDsrfk8E');
    }
  }
  //appendnew_flow_editFormComponent_start

  sd_myLyHmKal0GdFosF(bh) {
    try {
      this.page.editData = bh.pageInput.editData;
      this.page.countries = undefined;
      this.page.date = undefined;
      this.page.weather = '0 C';
      bh = this.importingMoment(bh);
      //appendnew_next_sd_myLyHmKal0GdFosF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_myLyHmKal0GdFosF');
    }
  }

  importingMoment(bh) {
    try {
      this.page.moment = moment;
      bh = this.importingForm(bh);
      //appendnew_next_importingMoment
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_evdGD5Dt1vK79JWY');
    }
  }

  importingForm(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;
      bh = this.sd_8ijgV3Z6dgKzch6d(bh);
      //appendnew_next_importingForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ckc9Bof1qlsR4uhT');
    }
  }

  async sd_8ijgV3Z6dgKzch6d(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.fetchCountryAndState(
        undefined
      );
      bh.local.countries = outputVariables.input.result;

      bh = this.sd_ahAzO1np0BFznnpl(bh);
      //appendnew_next_sd_8ijgV3Z6dgKzch6d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ijgV3Z6dgKzch6d');
    }
  }

  sd_ahAzO1np0BFznnpl(bh) {
    try {
      const page = this.page;
      page.countries = bh.local?.countries?.data;

      if (page?.editData) {
        page.weather = page?.editData?.weather;
        page.date = {
          date: page?.editData?.date,
          dateDiff: page?.editData?.dateDiff,
          currentDate: page?.editData?.currentDate,
        };

        console.log(page?.editData, 'edit data consoling on render');

        page.addDetailsForm = new page.formGroup({
          date: new page.formControl(page?.editData?.date, [
            page.validator.required,
          ]),
          country: new page.formControl(page?.editDate?.country, [
            page.validator.required,
          ]),
          state: new page.formControl(page?.editData?.state, [
            page.validator.required,
          ]),
        });
      } else {
        page.weather = 0;
        page.date = {
          date: '',
          dateDiff: '',
          currentDate: moment().format('YYYY-MM-DD'),
        };

        page.addDetailsForm = new page.formGroup({
          date: new page.formControl('', [page.validator.required]),
          country: new page.formControl('', [page.validator.required]),
          state: new page.formControl('', [page.validator.required]),
        });
      }
      //appendnew_next_sd_ahAzO1np0BFznnpl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ahAzO1np0BFznnpl');
    }
  }

  sd_HyX1yQTbLTLvJ7GI(bh) {
    try {
      bh.pageOutput.closeModal.emit(false);
      //appendnew_next_sd_HyX1yQTbLTLvJ7GI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HyX1yQTbLTLvJ7GI');
    }
  }

  sd_mXhlbHmHuu6MfABT(bh) {
    try {
      const page = this.page;
      console.log(bh.input?.country?.value?.states, 'states');
      page.country = bh.input?.country?.value;
      page.weatherData = 0;
      page.states = bh.input?.country?.value?.states;
      //appendnew_next_sd_mXhlbHmHuu6MfABT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mXhlbHmHuu6MfABT');
    }
  }

  sd_8HL7BJnAzHJyC0en(bh) {
    try {
      const page = this.page;
      page.state = bh?.input?.state?.value;
      console.log(bh?.input?.state?.value, 'state on change working');
      page.weather = 0;
      bh = this.sd_9QvVzQQBVHTqEKWy(bh);
      //appendnew_next_sd_8HL7BJnAzHJyC0en
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8HL7BJnAzHJyC0en');
    }
  }

  async sd_9QvVzQQBVHTqEKWy(bh) {
    try {
      const userServiceInstance: userService =
        this.__page_injector__.get(userService);

      let outputVariables = await userServiceInstance.fetchWeatherData(
        bh.input.state.value.name,
        undefined,
        this.page.country.name
      );
      bh.local.result = outputVariables.input.result;

      bh = this.sd_QJtNujaeOB9HOftP(bh);
      //appendnew_next_sd_9QvVzQQBVHTqEKWy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9QvVzQQBVHTqEKWy');
    }
  }

  sd_QJtNujaeOB9HOftP(bh) {
    try {
      const page = this.page;
      console.log(bh.local.result, 'weather result showing flow page');
      page.weather = bh.local?.result?.main?.feels_like;
      //appendnew_next_sd_QJtNujaeOB9HOftP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QJtNujaeOB9HOftP');
    }
  }

  submitValidation(bh) {
    try {
      const page = this.page;
      if (
        !page?.addDetailsForm?.value?.country ||
        page?.addDetailsForm?.value?.country?.name?.trim().length == 0
      ) {
        page.addDetailsForm.get('country').status = 'INVALID';
        return;
      }

      if (
        !page?.addDetailsForm?.value?.state ||
        page?.addDetailsForm?.value?.state?.name?.trim().length == 0
      ) {
        page.addDetailsForm.get('state').status = 'INVALID';
        return;
      }

      if (!page?.addDetailsForm?.value?.date) {
        page.addDetailsForm.get('date').status = 'INVALID';
        return;
      }

      const isNew = page?.editData ? false : true;

      bh.local.response = {
        isNew: isNew,
        index: page?.editData?.index,
        date: moment(page?.date?.date).format('YYYY-MM-DD'),
        dateDiff: page?.date?.dateDiff,
        currentDate: moment(page?.date?.currentDate).format('YYYY-MM-DD'),
        country: page?.country?.name,
        state: page?.state?.name,
        weather: page?.weather,
      };
      bh = this.sd_H0yqED9XP1g7r73o(bh);
      //appendnew_next_submitValidation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E8GRN3DOur5DLDTm');
    }
  }

  sd_H0yqED9XP1g7r73o(bh) {
    try {
      bh.pageOutput.response.emit(bh.local.response);
      //appendnew_next_sd_H0yqED9XP1g7r73o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H0yqED9XP1g7r73o');
    }
  }

  sd_LWRSZWerhqSeYfLg(bh) {
    try {
      const page = this.page;
      console.log(bh?.input?.date, 'date consoling');
      let date: any = new Date(bh.input.date);
      const currentDate: any = new Date(page?.date?.currentDate);
      console.log('current date', currentDate);
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

      console.log(`${daysDifference} Days ${hoursDifference} Hours`);

      page.date = {
        dateDiff: `${daysDifference} Days ${hoursDifference} Hours`,
        currentDate: currentDate,
        date: date,
      };
      //appendnew_next_sd_LWRSZWerhqSeYfLg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LWRSZWerhqSeYfLg');
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
  //appendnew_flow_editFormComponent_Catch
}
