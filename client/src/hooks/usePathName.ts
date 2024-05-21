import { usePathname } from 'next/navigation';

export const useHomePage = () => {
	const pathname = usePathname();

	if (pathname === '/') {
		return true;
	}

	return false;
};
