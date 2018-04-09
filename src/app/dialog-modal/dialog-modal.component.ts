import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {

  public loginName: string;

  constructor(
    
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.loginName = ''
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  consequencesOfLogin(): void {
    localStorage.setItem('isAuthorized', 'true')
    localStorage.setItem('loginName', this.loginName)
    this.dialogRef.close();
    console.log('Zalogowano', this.loginName)
    location.reload();

  }

  ngOnInit() { }

}
