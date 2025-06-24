export const isString = (value) => typeof value === "string";

export const formatDate = (unformatted, day) => {
    const formattedDate = new Date(unformatted.seconds * 1000);
    const date =
      formattedDate.getDate() +
      "-" +
      formattedDate.toLocaleString("en-US", { month: "short" });

    const time = formattedDate?.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return day ? `${date}` : `${date}  ${time}`;
  };

  export const filterHandler = (orders, filterType) => {
    if(filterType === "auto"){
      return orders
    }
    
    if (filterType === "nasiya") {
      const nasiyaOrders = orders.filter(
        (item) => item?.nasiya && item?.nasiya
      );
      return nasiyaOrders;
    }

    if (filterType === "normal") {
      const normalOrders = orders.filter((item) => !item?.nasiya);
      return normalOrders;
    }

    if (filterType === "nasiya3") {
      const nasiya3 = orders.filter(
        (item) => !item?.nasiya?.payment4 && item?.nasiya?.payment3
      );
      return nasiya3;
    }

    if (filterType === "nasiya6") {
      const nasiya6 = orders.filter(
        (item) => !item?.nasiya?.payment7 && item?.nasiya?.payment6
      );
      return nasiya6;
    }

    if (filterType === "nasiya12") {
      const nasiya12 = orders.filter((item) => item?.nasiya?.payment12);
      return nasiya12;
    }

    if (filterType === "ignore") {
      const nasiya12 = orders.filter(
        (item) => item?.orderCondition === false || item?.confirmed === false
      );
      return nasiya12;
    }
  };

  // const sear