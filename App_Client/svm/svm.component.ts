import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Soda } from '../models/soda';
import { Coins } from '../models/coins';

@Component({
    selector: 'svm',
    templateUrl: './svm.component.html',
    providers: [DataService]
})
export class SVMComponent implements OnInit {

    soda: Soda = new Soda();   
    sodaArr: Soda[];  
    coin: Coins = new Coins();
    coinArr: Coins[];
    tableMode: boolean = true;          

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadSoda(); 
        this.loadCoins();   
    }

    // получаем данные через сервис
    loadSoda() {
        this.dataService.getSodaStorage()
            .subscribe((data: Soda[]) => this.sodaArr = data);
    }
    loadCoins() {
        this.dataService.getCoinsStorage()
            .subscribe((data: Coins[]) => this.coinArr = data);
    }

    // сохранение данных
    save() {
        if (this.soda.id == null) {
            this.dataService.createSoda(this.soda)
                .subscribe((data: Soda) => this.sodaArr.push(data));
        } else {
            this.dataService.updateSoda(this.soda)
                .subscribe(data => this.loadSoda());
        }
        this.cancel();
    }

    editProduct(p: Soda) {
        this.soda = p;
    }

    cancel() {
        this.soda = new Soda();
        this.tableMode = true;
    }
    delete(s: Soda) {
        this.dataService.deleteSoda(s.id)
            .subscribe(data => this.loadSoda());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}