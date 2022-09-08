import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import moment from 'moment';
import { Subject, takeUntil } from 'rxjs';
import { WeeklyPaymentService } from './weekly-payments.service';

@Component({
    selector: 'weekly-payments',
    templateUrl: './weekly-payments.component.html',
    encapsulation: ViewEncapsulation.None
})
export class WeeklyPaymentsComponent {

    data: any;
    weeklyPaymentsDataSource: MatTableDataSource<any> = new MatTableDataSource();
    weeklyPaymentsTableColumns: string[] = ['referenceId', 'date', 'name', 'amount', 'status', 'proof', 'action'];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    dateFrom: any = null;
    dateTo: any = null;
    start = 0;
    length = 10;
    total = 0;
    seemore = true;
    currentDateFrom: any = null;
    currentDateTo: any = null;
    currentStatus: any = 'all';
    status = 'all';
    searchKeyword = '';
    currentSearchKeyword = '';
    /**
     * Constructor
     */
    constructor(private _weeklyPaymentService: WeeklyPaymentService, private _fuseConfirmationService: FuseConfirmationService) {
    }


    ngOnInit(): void {
        // Get the data
        this._weeklyPaymentService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {
                // Store the table data
                this.data = data.data;
                this.weeklyPaymentsDataSource.data = data?.data;
                this.total = data?.total;
                if (data?.data.length >= this.total) {
                    this.seemore = false;
                } else {
                    this.seemore = true;
                }
                if (this.total == 0) {
                    this.length = 0;
                }
            });
    }
    search() {
        const from = moment(this.dateFrom).format('yyyy-MM-DD');
        const to = moment(this.dateTo).format('yyyy-MM-DD');
        this.currentDateFrom = from;
        this.currentDateTo = to;
        this.currentStatus = this.status;
        this.currentSearchKeyword = this.searchKeyword;
        this.data = this._weeklyPaymentService.getData({ 'start': 0, 'length': 10, 'merchant_id': -1, 'date_from': from, 'date_to': to, 'status': this.status, 'search': this.searchKeyword })
            .subscribe();
    }
    seeMore() {
        const from = this.currentDateFrom;
        const to = this.currentDateTo;
        const status = this.status;
        const search = this.currentSearchKeyword;
        this.length += 10;
        this.data = this._weeklyPaymentService.getData({ 'start': 0, 'length': this.length, 'merchant_id': -1, 'date_from': from, 'date_to': to, 'status': status, 'search': search })
            .subscribe();
    }

    searchKeywordInput() {
        const from = this.currentDateFrom;
        const to = this.currentDateTo;
        const status = this.status;
        const search = this.searchKeyword;
        this.data = this._weeklyPaymentService.getData({ 'start': 0, 'length': this.length, 'merchant_id': -1, 'date_from': from, 'date_to': to, 'status': status, 'search': search })
            .subscribe();
    }
    isLoading = false;
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    sendWeeklyPayment() {
        const from = moment(this.dateFrom).format('yyyy-MM-DD');
        const to = moment(this.dateTo).format('yyyy-MM-DD');
        this._fuseConfirmationService.open(
            {
                title: 'Send weekly payment to all merchant?',
                message: '',
                icon: {
                    show: false,
                    name: 'heroicons_outline:question-mark-circle',
                    color: 'primary'
                },
                actions: {
                    confirm: {
                        show: true,
                        label: 'Yes',
                        color: 'primary'
                    },
                    cancel: {
                        show: true,
                        label: 'Cancel'
                    }
                },
                dismissible: true
            }).afterClosed().subscribe(result => {
                if (result == 'confirmed') {
                    this._weeklyPaymentService.sendData({ from: from, to: to })
                        .subscribe(result => {
                            this._fuseConfirmationService.open(
                                {
                                    title: result['message'],
                                    message: '',
                                    icon: {
                                        show: false,
                                        name: 'heroicons_outline:question-mark-circle',
                                        color: 'primary'
                                    },
                                    actions: {
                                        confirm: {
                                            show: true,
                                            label: 'Yes',
                                            color: 'primary'
                                        },
                                        cancel: {
                                            show: false,
                                            label: 'Cancel'
                                        }
                                    },
                                    dismissible: true
                                }).afterClosed().subscribe(result => {
                                });
                        },
                        errorres => {
                            this._fuseConfirmationService.open(
                                {
                                    title: errorres.error.message,
                                    message: '',
                                    icon: {
                                        show: false,
                                        name: 'heroicons_outline:question-mark-circle',
                                        color: 'primary'
                                    },
                                    actions: {
                                        confirm: {
                                            show: true,
                                            label: 'Yes',
                                            color: 'primary'
                                        },
                                        cancel: {
                                            show: false,
                                            label: 'Cancel'
                                        }
                                    },
                                    dismissible: true
                                }).afterClosed().subscribe(result => {
                                });
                        })
                }
            });
    }

}
