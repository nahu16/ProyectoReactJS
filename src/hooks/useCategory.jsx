import React from "react";

export const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    getcategory()
      .then((response) => {
        setCategory(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
};

