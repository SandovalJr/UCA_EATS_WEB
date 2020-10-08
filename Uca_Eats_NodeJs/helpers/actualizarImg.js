const fs = require("fs");

const Category = require("../models/Category");
const Product = require("../models/Product");

const borrarImagen = (path) => {
  if (fs.existsSync(path)) {
    // Borrar la imagen anterior
    fs.unlinkSync(path);
  }
};

const actualizarImagen = async (tipo, category_name, nombreArchivo) => {
  let pathViejo;

  switch (tipo) {
    case "category":
      const category = Category.findOne({
        where: {
          category_name: category_name,
        },
      }).catch(function (error) {
        res.status(500).json(error);
      });
      console.log("Buscando Imagen");
      
      if (!category) {
        console.log("No se encontro categoria");
        return false;
      }

      pathViejo = `./uploads/category/${category.img_category}`;
      borrarImagen(pathViejo);

      category.img_category = nombreArchivo;

      Category.update(category, {
        where: {
          category_name: category_name,
        },
      })
        .then(function (updateUserInfo) {
          res.status(200).json(updateUserInfo);
        })
        .catch(function (error) {
          res.status(500).json(error + " valio popis");
        });

      return true;

      break;
    // case 'hospitales':
    //     const hospital = await Hospital.findById(id)
    //     if (!hospital) {
    //         console.log('No se encontro hospital');
    //         return false;
    //     }

    //     pathViejo = `./uploads/hospitales/${ hospital.img }`;
    //     borrarImagen(pathViejo);

    //     hospital.img = nombreArchivo;

    //     await hospital.save();
    //     return true;

    //     break;
  }
};

module.exports = {
  actualizarImagen,
};
