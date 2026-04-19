'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  // "/dashboard/invoices"
  const pathname:string = usePathname();
  const router:AppRouterInstance = useRouter();

  // this function SHOULD just be using a setTimeout & capture its value to interrupt if there's a new input
  // however, this function instead uses a chain of npm dependencies, many of which are already deprecated at the time of writing...
  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    console.log(`Searching... ${searchTerm}`);

    const params = new URLSearchParams(searchParams);

    params.set('page', '1');
    searchTerm ? params.set('query', searchTerm) : params.delete('query');

    // uses JavaScript's window.history.replaceState(), but integrates with any connected re-render logic
    router.replace(`${pathname}?${params.toString()}`);

    // console.log(searchTerm);
  }, 300); // delays the handleSearch function to only run after 300 ms have passed without another handleSearch call

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(changeEvent) => {
          handleSearch(changeEvent.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}

