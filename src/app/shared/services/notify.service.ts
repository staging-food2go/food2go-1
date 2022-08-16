import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
  ) { }

  error(content: string) {
    this.showNotif("danger", content);
  }

  info(content: string) {
    this.showNotif("info", content);
  }

  success(content: string) {
    this.showNotif("success", content);
  }

  warning(content: string) {
    this.showNotif("warning", content);
  }

  primary(content: string) {
    this.showNotif("primary", content);
  }

  showNotif(type: string, content: string) {
    if (type == 'error')
      type = 'bg-red-500';
    else if (type == 'success')
      type = 'bg-emerald-500'
    else if (type == 'warning')
      type = 'bg-orange-500'
    else if (type == 'primary')
      type = 'bg-blue-500'
    else if (type == 'info')
      type = 'bg-gray-500'

    $.notify({
        icon: 'notifications',
        message: content
    }, {
        type: type,
        timer: 300,
        placement: {
            from: "bottom",
            align: 'right'
        },
        template: "<div id='alert-1' class='flex p-4 mb-4 {0} rounded-lg' role='alert'>" +
        "<div>"+
        "<i class='fa fa-bell'></i> <span class='ml-3 text-sm font-medium text-gray-100'>{2}</span>"+
        "</div>"+
      "</div>"
    });
  }


}
