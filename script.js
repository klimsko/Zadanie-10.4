function Telefon(marka, cena, kolor) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
}
Telefon.prototype.printInfo = function(){
  console.log('Marka telefonu to: '+ this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}
var iPhone6 = new Telefon("Apple", 2250, "srebrny");
var galaxyS6 = new Telefon("Samsung", 1550, "czarny");
var onePlusOne = new Telefon("Google", 2300, "biały");

iPhone6.printInfo();
galaxyS6.printInfo();
onePlusOne.printInfo();
