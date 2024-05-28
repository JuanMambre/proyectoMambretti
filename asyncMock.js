
   const products =  [
      {
        "id": "001",
        "titulo": "Procesador Intel Core i7",
        "descripcion": "Procesador Intel Core i7 de 8ª generación con 8 núcleos",
        "imagen": "src/assets/products-img/intel-i7.jpg",
        "stock": 15,
        "categoria": "Procesador"
      },
      {
        "id": "002",
        "titulo": "Tarjeta Madre ASUS ROG",
        "descripcion": "Tarjeta madre ASUS ROG compatible con procesadores Intel y AMD",
        "imagen": "src/assets/products-img/Tarjeta-Madre-ASUS-ROG.jpg",
        "stock": 20,
        "categoria": "Tarjetas madre"
      },
      {
        "id": "003",
        "titulo": "Tarjeta de Video NVIDIA GeForce RTX 3080",
        "descripcion": "Tarjeta de video NVIDIA GeForce RTX 3080 con 10GB de memoria GDDR6X",
        "imagen": "src/assets/products-img/Tarjeta-de-Video-NVIDIA-GeForce-RTX-3080.jpg",
        "stock": 10,
        "categoria": "Tarjetas Graficas"
      },
      {
        "id": "004",
        "titulo": "Gabinete Corsair Carbide Series",
        "descripcion": "Gabinete Corsair Carbide Series con ventana lateral de vidrio templado",
        "imagen": "src/assets/products-img/Gabinete-Corsair-Carbide-Series.jpg",
        "stock": 25,
        "categoria": "Gabinete"
      },
      {
        "id": "005",
        "titulo": "Fuente de Poder EVGA 1000W W1",
        "descripcion": "Fuente de poder EVGA 600 W1, 80+ WHITE 1000W",
        "imagen": "src/assets/products-img/Fuente-evga.jpg",
        "stock": 30,
        "categoria": "Fuentes"
      },
      {
        "id": "006",
        "titulo": "Memoria RAM Corsair Vengeance LPX 16GB",
        "descripcion": "Memoria RAM Corsair Vengeance LPX 16GB (2 x 8GB) DDR4 3200MHz",
        "imagen": "src/assets/products-img/Memoria-RAM-Corsair-Vengeance-LPX-16GB.jpg",
        "stock": 40,
        "categoria": "Ram"
      },
      {
        "id": "007",
        "titulo": "Disco Duro Seagate BarraCuda 2TB",
        "descripcion": "Disco duro Seagate BarraCuda de 2TB, 7200 RPM",
        "imagen": "src/assets/products-img/DiscoDuro-Seagate-BarraCuda-2TB.jpg",
        "stock": 35,
        "categoria": "Almacenamiento"
      },
      {
        "id": "008",
        "titulo": "SSD Kingston A2000 NVMe PCIe M.2 1TB",
        "descripcion": "SSD Kingston A2000 NVMe PCIe M.2 de 1TB",
        "imagen": "src/assets/products-img/SSD-Kingston-A2000-NVMe-PCIe-M.2-1TB.jpg",
        "stock": 20,
        "categoria": "Almacenamiento"
      },
      {
        "id": "009",
        "titulo": "Tarjeta de Red TP-Link Archer T6E",
        "descripcion": "Tarjeta de red TP-Link Archer T6E AC1300",
        "imagen": "src/assets/products-img/Tarjeta-de-Red-TP-Link-Archer-T6E.jpg",
        "stock": 50,
        "categoria": "Tarjeta red"

      },
      {
        "id": "010",
        "titulo": "Refrigerador de CPU Cooler Master Hyper 212 RGB",
        "descripcion": "Refrigerador de CPU Cooler Master Hyper 212 RGB Black Edition",
        "imagen": "src/assets/products-img/Refrigerador-de-CPU-Cooler-Master-Hyper-212-RGB.jpg",
        "stock": 15,
        "categoria": "Refrigeraciones"
      }
    ]
  
    export const getProducts = new Promise((resolve) => {
          resolve(products);
      });
      
      export const getProduct = (id) => {
        return products.find((prod) => prod.id == id);
      };
      