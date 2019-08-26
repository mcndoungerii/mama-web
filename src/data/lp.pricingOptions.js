const data = {
    features:[
        "Number of end products 1",
        "Free updates",
        "Forum support",
        "Two factor authentication",
        "Team Permissions",
        "24/5 support",
        "24/7 support",
        "User actions audit log"        
    ],
    packages:[
        {
            url: "/auth-login",
            icon: "iconsmind-Male",
            title: "DEVELOPER",
            price: "$11",
            detail: "User/Month",
            features: [true,true,true,true,false,false,false,false]
          },
          {
            url: "/auth-login",
            icon: "iconsmind-MaleFemale",
            title: "TEAM",
            price: "$17",
            detail: "User/Month Up to 10 Users",
            features: [true,true,true,true,true,true,false,false]
          },
          {
            url: "/auth-login",
            icon: "iconsmind-MaleFemale",
            title: "ENTERPRISE",
            price: "$19",
            detail: "User/Month 10+ Users",
            features: [true,true,true,true,true,false,true,true]
          }
    ]
};
  export default data;
  