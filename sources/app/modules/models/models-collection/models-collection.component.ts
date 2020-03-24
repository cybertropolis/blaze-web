import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSnackBar } from '@angular/material';

import { ModelsCollectionService } from './models-collection.service';

export interface ModelData {
    name: string
}

@Component({
    selector: 'blaze-models-collection',
    templateUrl: './models-collection.component.html',
    styleUrls: ['./models-collection.component.scss']
})
export class ModelsCollectionComponent implements OnInit {

    selectedRowIndex: number;
    displayedColumns: string[] = ['edit', 'name', 'test', 'train', 'validate'];
    dataSource: MatTableDataSource<ModelData>;

    refreshing = false;

    constructor(
        private router: Router,
        private modelsCollectionService: ModelsCollectionService,
        public snackBar: MatSnackBar) { }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.refreshing = true;
        this.modelsCollectionService.getModels().subscribe((models: any) => {
            this.dataSource = new MatTableDataSource(models);
            this.refreshing = false;
        });
    }

    add() {
        this.router.navigate(['/model-details/']);
    }

    details(row) {
        this.router.navigate(['/model-details/', row._id.$oid]);
    }

    test(row) {
        row.situations.testing = !row.situations.testing;
        this.modelsCollectionService.test(row._id.$oid, row.situations.testing).subscribe((response: any) => {
            this.showMessage(`TESTE ${row.situations.testing ? 'INICIADO' : 'CANCELADO'}`, 'FECHAR');
        });
    }

    train(row) {
        row.situations.training = !row.situations.training;
        this.modelsCollectionService.train(row._id.$oid, row.situations.training).subscribe((response: any) => {
            this.showMessage(`TREINO ${row.situations.training ? 'INICIADO' : 'CANCELADO'}`, 'FECHAR');
        });
    }

    validate(row) {
        row.situations.validating = !row.situations.validating;
        this.modelsCollectionService.validate(row._id.$oid, row.situations.validating).subscribe((response: any) => {
            this.showMessage(`VALIDAÇÃO ${row.validating ? 'INICIADA' : 'CANCELADA'}`, 'FECHAR');
        });
    }

    showMessage(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    }
}
