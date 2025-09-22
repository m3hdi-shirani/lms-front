"use client";

import Drawer from "@/components/ui/drawer/Drawer";
import { useState } from "react";

const DrawerBasic = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <button onClick={openDrawer}>open drawer</button>
      <Drawer
        isOpen={isOpen}
        closable
        onClose={closeDrawer}
        onRequestClose={closeDrawer}
        title="Drawer Title"
        width={300}
      >
        ok
      </Drawer>
    </>
  );
};

export default DrawerBasic;
