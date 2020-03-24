import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', canActivate: [AuthGuard], component: ShoppingListComponent },
    ]),
    SharedModule,
    FormsModule
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {}
