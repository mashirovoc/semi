const SearchResult = ({ q }: { q: string }) => {
  return (
    <div className="space-y-6 p-3">
      <div className="space-y-3">
        <div className="title_container">
          <div className="title">{q} の検索結果</div>
        </div>
        {/* Contents */}
      </div>
    </div>
  );
};

export default SearchResult;
