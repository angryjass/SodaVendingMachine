var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Soda } from '../models/soda';
import { Coins } from '../models/coins';
var SVMComponent = /** @class */ (function () {
    function SVMComponent(dataService) {
        this.dataService = dataService;
        this.soda = new Soda();
        this.coin = new Coins();
        this.tableMode = true;
    }
    SVMComponent.prototype.ngOnInit = function () {
        this.loadSoda();
        this.loadCoins();
    };
    // получаем данные через сервис
    SVMComponent.prototype.loadSoda = function () {
        var _this = this;
        this.dataService.getSodaStorage()
            .subscribe(function (data) { return _this.sodaArr = data; });
    };
    SVMComponent.prototype.loadCoins = function () {
        var _this = this;
        this.dataService.getCoinsStorage()
            .subscribe(function (data) { return _this.coinArr = data; });
    };
    // сохранение данных
    SVMComponent.prototype.save = function () {
        var _this = this;
        if (this.soda.id == null) {
            this.dataService.createSoda(this.soda)
                .subscribe(function (data) { return _this.sodaArr.push(data); });
        }
        else {
            this.dataService.updateSoda(this.soda)
                .subscribe(function (data) { return _this.loadSoda(); });
        }
        this.cancel();
    };
    SVMComponent.prototype.editProduct = function (p) {
        this.soda = p;
    };
    SVMComponent.prototype.cancel = function () {
        this.soda = new Soda();
        this.tableMode = true;
    };
    SVMComponent.prototype.delete = function (s) {
        var _this = this;
        this.dataService.deleteSoda(s.id)
            .subscribe(function (data) { return _this.loadSoda(); });
    };
    SVMComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    SVMComponent = __decorate([
        Component({
            selector: 'svm',
            templateUrl: './svm.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], SVMComponent);
    return SVMComponent;
}());
export { SVMComponent };
//# sourceMappingURL=svm.component.js.map