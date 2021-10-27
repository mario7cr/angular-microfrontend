import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdmfSharedComponent } from '../components/mdmf-shared.component';

@NgModule({
  declarations: [MdmfSharedComponent],
  imports: [CommonModule],
  exports: [MdmfSharedComponent],
})
export class MdmfSharedModule {}
