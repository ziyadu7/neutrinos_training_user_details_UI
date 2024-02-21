// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_CK4a3TO3vRkIuzHm from 'app/sd-services/userService'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_CK4a3TO3vRkIuzHm: sd_CK4a3TO3vRkIuzHm.userService) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
