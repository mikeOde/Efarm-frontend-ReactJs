import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddItemButton from "../../components/ui/AddItemButton";
import ItemList from "../../components/ui/ItemList";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";
import api from "../../service/api";

function Vegetables() {
  const history = useHistory();
  const [fetchedVegetables, setFetchedVegetables] = useState([]);

  const allVegetables = () => {
    api
      .getFarmerVegetables()
      .then((response) => {
        setFetchedVegetables(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    allVegetables();
  }, [history]);

  const cardData = {
    subtitle: "Box weight",
    avatar: "kg",
  };

  const formData = {
    title: "VEGETABLES",
    nameLabel: "Vegetable Name",
    namePlaceHolder: "Insert vegetable name",
    quantityLabel: "Box Weight",
    quantityPlaceHolder: "Insert vegetable weight per box",
    priceLabel: "Price box",
    pricePlaceHolder: "Insert price per box",
    pictureLabel: "Vegetable Picture",
    descriptionLabel: "Description",
    descriptionPlaceHolder: "Insert a brief description",
    buttonLabel: "VEGETABLE",
    isVegetable: "1", //to be used as a condition in the addItemForm.js
  };

  return (
    <AdminLayout>
      <ItemList
        items={fetchedVegetables}
        data={cardData}
        itemType={formData.isVegetable}
        getFunction={allVegetables}
        editData={formData}
      />
      <AddItemButton data={formData} getFunction={allVegetables} />
    </AdminLayout>
  );
}

export default Vegetables;
