import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";

const MobileHeader = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const navItems = [
    { id: "home", icon: Home, label: "EXKO", navigation: "/" },
    { id: "search", icon: Search, label: "Catalog", },
    { id: "cart", icon: ShoppingCart, label: "Cart", navigation: "/cart" },
    { id: "favourite", icon: Heart, label: "Favourite", navigation: "/favourite" },
    { id: "profile", icon: User, label: "Profile", },
  ];

  const handleTabChange = (tabId, nav) => {
    setActiveTab(tabId);

    if(nav){
      navigate(nav)
    }
  };

  return (
    <div className="mobile-navigation">
      <div className="navigation-bar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              className={`nav-itemm ${isActive ? "active" : ""}`}
              onClick={() => handleTabChange(item.id, item?.navigation)}
            >
              <div className="nav-content">
                <Icon className="nav-icon" />
                {isActive && <span className="nav-label">{item.label}</span>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileHeader;
