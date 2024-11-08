/** @format */

import { useLocation, Link } from "react-router-dom";
import { Flex } from "@mantine/core";

function Breadcrumb({ title, path }) {
  const location = useLocation();

  const renderBreadcrumb = () => {
    if (location.pathname === `/admin-panel/${path}`) {
      return <h1 className="text-2xl font-semibold">{title}</h1>;
    } else if (location.pathname.startsWith(`/admin-panel/${path}`)) {
      return (
        <Flex align="center" gap="xs">
          <Link to={`/admin-panel/${path}`}>
            <h1 className="text-2xl font-semibold">{title}</h1>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-400">{`>`}</h1>
          <h1 className="text-2xl font-semibold text-gray-400">Edit</h1>
        </Flex>
      );
    }
  };

  return (
    <Flex direction="column" w="100%">
      <Flex justify="flex-start" align="center" py="sm">
        {renderBreadcrumb()}
      </Flex>
    </Flex>
  );
}

export default Breadcrumb;
