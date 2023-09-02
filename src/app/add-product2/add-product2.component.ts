import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { AddProduct2Service } from './add-product2.service';

@Component({
  selector: 'app-add-product2',
  templateUrl: './add-product2.component.html',
  styleUrls: ['./add-product2.component.css']
})
export class AddProduct2Component {
  closeResult = '';

  constructor(config: NgbModalConfig, private modalService: NgbModal,private productService:AddProduct2Service) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}
	posts: any

	items = { code: '', name: '', price: '', size: '', url: '' };


	produ() {
		console.log("Product-", this.items);
		this.productService.saveItems(this.items).subscribe(() => {
			// alert('Product save Successfully');
			this.modalService.dismissAll();

			this.ngOnInit();
			this.items = { code: '', name: '', price: '', size: '', url: '' };

		});

	}
	ngOnInit() {
		let self = this;
		this.productService.getposts().subscribe(function (response) {
			self.posts = response;
			console.log(self.posts);
		})
	}
	deleteItems(id: any) {
		console.log("delete product-", this.items)
		this.productService.deleteItems(id).subscribe(() => {
			alert('Product Delete Successfully');
			this.ngOnInit();
		});
	}
	editItems(j: any = []) {
		this.items = j;
	}
	update() {


		this.productService.update(this.items).subscribe(
			() => {
				alert('Product Update Successfully');
				this.ngOnInit();
				this.modalService.dismissAll();
			});
	}



}
