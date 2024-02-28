

class ProductManager {
    constructor() {
        this.products = []; 
        this.productIdCounter = 1; 
    }


    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Todos los campos son obligatorios"); 
            return; 
        }

        const existingProduct = this.products.find(product => product.code === code); 
        if (existingProduct) {
            console.log("El código ya existe.")
            return; 
        }
    

        const product = {
            id: this.productIdCounter++,
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock
        }; 

        this.products.push(product); 
    }

    getProducts() {
        return this.products; 
    }

    getProductById(id){
        const product = this.products.find(product => product.id === id); 
        if (!product) {
            console.log("Producto no encontrado."); 
        }
        return product; 
    }
}    

const manager = new ProductManager(); 

manager.addProduct("Overwhelmed", "Techno", 4, "https://img.freepik.com/fotos-premium/manos-multitud-discoteca_23-2147717087.jpg?w=2000", "E1", 5); 
manager.addProduct("Voltage Drop", "Melodic Techno", 6, "https://img.freepik.com/foto-gratis/cerca-grabacion-video-telefono-inteligente-concierto-imagen-entonada_1153-6815.jpg?t=st=1709139568~exp=1709143168~hmac=ee745f9d03f24f437965afb357afbc133c3d2333763e9652240fd97e6c2eeef4&w=900", "F2", 20); 

console.log(manager.getProducts());
console.log(manager.getProductById(1)); 
console.log(manager.getProductById(2)); 

