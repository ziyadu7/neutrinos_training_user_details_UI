// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class userService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_userService

  async fetchCountryAndState(result: any = undefined, ...others) {
    let bh: any = {
      input: {
        result,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_UjoyFvW5hMn6r3t9(bh);
      //appendnew_next_fetchCountryAndState
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_omv02yD2IyIYgSGk');
    }
  }

  async fetchWeatherData(
    state: any = undefined,
    result: any = undefined,
    country: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        state,
        result,
        country,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_ZQVpW9b07f1bASq7(bh);
      //appendnew_next_fetchWeatherData
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wOWTr4KgfdNpheyr');
    }
  }

  async addDetails(
    details: any = undefined,
    response: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        details,
        response,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_lKopk061wqbLPqJB(bh);
      //appendnew_next_addDetails
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aqVjfeHGhi3yH4jT');
    }
  }

  async fetchDetails(
    response: any = undefined,
    query: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        response,
        query,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_cTpvpju40tfFR6Gg(bh);
      //appendnew_next_fetchDetails
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bs8myCrkjlEeB8hR');
    }
  }

  async updateDetails(
    response: any = undefined,
    body: any = undefined,
    query: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        response,
        body,
        query,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_hFYXw8G3R1UMtOHU(bh);
      //appendnew_next_updateDetails
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_noOT5LUeIApJFuuZ');
    }
  }
  //appendnew_flow_userService_start

  async sd_UjoyFvW5hMn6r3t9(bh) {
    try {
      bh.local.url = bh.system.environment.properties?.GET_COUNTRYS_API;
      bh = await this.sd_sOuifNQxFsRG5tUs(bh);
      //appendnew_next_sd_UjoyFvW5hMn6r3t9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UjoyFvW5hMn6r3t9');
    }
  }

  async sd_sOuifNQxFsRG5tUs(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_sOuifNQxFsRG5tUs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sOuifNQxFsRG5tUs');
    }
  }

  async sd_ZQVpW9b07f1bASq7(bh) {
    try {
      bh.local.url = `${bh.system.environment.properties?.WEATHER_API_BASE}?q=${bh.input?.state},${bh.input?.country}&appid=${bh.system.environment.properties?.WEATHER_API_ID}`;
      console.log(bh.local.url, 'weather url showing');
      bh = await this.sd_NhzqLuQb8ShcXKuq(bh);
      //appendnew_next_sd_ZQVpW9b07f1bASq7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZQVpW9b07f1bASq7');
    }
  }

  async sd_NhzqLuQb8ShcXKuq(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_VhEsjj7q8iyLEpgB(bh);
      //appendnew_next_sd_NhzqLuQb8ShcXKuq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NhzqLuQb8ShcXKuq');
    }
  }

  async sd_VhEsjj7q8iyLEpgB(bh) {
    try {
      console.log(bh.input.result, 'weather result');
      //appendnew_next_sd_VhEsjj7q8iyLEpgB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VhEsjj7q8iyLEpgB');
    }
  }

  async sd_lKopk061wqbLPqJB(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + `details`;
      bh = await this.sd_Fpv2MPdzj2tbxDGT(bh);
      //appendnew_next_sd_lKopk061wqbLPqJB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lKopk061wqbLPqJB');
    }
  }

  async sd_Fpv2MPdzj2tbxDGT(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.details,
      };
      bh.input.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Fpv2MPdzj2tbxDGT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fpv2MPdzj2tbxDGT');
    }
  }

  async sd_cTpvpju40tfFR6Gg(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + `details`;
      console.log(bh.input.query);
      bh = await this.sd_QvK2CgHVx9sIjfkO(bh);
      //appendnew_next_sd_cTpvpju40tfFR6Gg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cTpvpju40tfFR6Gg');
    }
  }

  async sd_QvK2CgHVx9sIjfkO(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.input.query,
        body: undefined,
      };
      bh.input.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_QvK2CgHVx9sIjfkO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QvK2CgHVx9sIjfkO');
    }
  }

  async sd_hFYXw8G3R1UMtOHU(bh) {
    try {
      bh.local.url = bh.system.environment.properties.ssdURL + `details`;
      console.log(bh.input.body, 'full body');
      bh = await this.sd_jGvndGkiq5mcZ5uX(bh);
      //appendnew_next_sd_hFYXw8G3R1UMtOHU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hFYXw8G3R1UMtOHU');
    }
  }

  async sd_jGvndGkiq5mcZ5uX(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: bh.input.query,
        body: bh.input.body,
      };
      bh.input.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_jGvndGkiq5mcZ5uX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jGvndGkiq5mcZ5uX');
    }
  }

  async sd_8rXQ6wUrP5O67Zca(bh) {
    try {
      console.log(bh.error, 'error consoling');
      const colonIndex = bh.error?.error?.indexOf(':');

      const atIndex = bh.error?.error?.indexOf(' at', colonIndex);

      bh.error.message = bh.error?.error?.substring(colonIndex + 1, atIndex);
      console.log(bh.error.message, 'error message consoling');
      bh = await this.sd_hLUXvmeif2sQobqi(bh);
      //appendnew_next_sd_8rXQ6wUrP5O67Zca
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8rXQ6wUrP5O67Zca');
    }
  }

  async sd_hLUXvmeif2sQobqi(bh) {
    try {
      this.matSnackBar.open(bh.error.message, 'Ok', {
        duration: 2500,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_hLUXvmeif2sQobqi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hLUXvmeif2sQobqi');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      (await this.errorCatching(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async errorCatching(bh) {
    const catchConnectedNodes = ['sd_8rXQ6wUrP5O67Zca', 'sd_hLUXvmeif2sQobqi'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_8rXQ6wUrP5O67Zca(bh);
    //appendnew_next_errorCatching
    return true;
  }
  //appendnew_flow_userService_Catch
}
