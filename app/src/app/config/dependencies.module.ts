// _neu_generated_code__dont_modify_directly_
//__IMPORT_MODULES_HERE__
//__LIBRARY__neutrinos\-file\-upload
import { NeutrinosFileUploadModule } from 'neutrinos-file-upload';
//__END__LIBRARY__neutrinos\-file\-upload
import {NgModule } from '@angular/core';
import { sdProviders} from './sd-providers';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    //__CUSTOM_IMPORTS_MODULES__
    //__CUSTOM_IMPORTS_MODULES_END__
    //__IMPORTS_MODULES__
    
//__IMPORTED_MODULE__NeutrinosFileUploadModule
NeutrinosFileUploadModule,
//__IMPORTED_MODULE__NeutrinosFileUploadModule__END
//__IMPORTS_MODULES_END__
  ],
  providers: [...sdProviders],
  exports: [
    //__EXPORTS_MODULES__
    
//__EXPORTED_MODULE__NeutrinosFileUploadModule
NeutrinosFileUploadModule,
//__EXPORTED_MODULE__NeutrinosFileUploadModule__END
//__EXPORTS_MODULES_END__
  ]
})
export class DependenciesModule { }