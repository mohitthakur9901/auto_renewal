"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Input } from "../ui/input";
import debounce from "lodash/debounce";
import { searchMember } from "@/app/actions/member";

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = useCallback(
    debounce(async (search: string) => {
      console.log("Search term:", search);

      const response = await searchMember(search);
      if (response.success) {
        // list data 
        response.data?.map((item: any) => {
          setResults((prevResults) => [...prevResults, item]);
        })
      } else {
        console.log(response.message)
      }
    }, 500), [
    setResults
  ]
  )

  useEffect(() => {
    if (searchTerm.trim()) {
      handleSearch(searchTerm);
    } else {
      setResults([]);
    }
  }, [searchTerm, handleSearch]);

  return (
    <div className="w-full p-4 space-y-4">
      <Input
        type="text"
        placeholder="Search by name, email, or phone"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Results */}
      {results.length > 0 && (
        <div className="rounded-md border p-4 bg-muted">
          <h3 className="text-sm font-semibold mb-2">Search Results:</h3>
          <ul className="space-y-1 text-sm">
            {results.map((member) => (
              <li key={member.id} className="border-b pb-1">
                <span className="font-medium">{member.name}</span> — {member.email} / {member.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar