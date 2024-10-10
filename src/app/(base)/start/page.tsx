const page = () => {
  return (
    <div className="h-[calc(100dvh-56px)] flex items-center justify-center p-3">
      <div className="space-y-3 w-full max-w-xl">
        <div className="title_container">
          <div className="title">学習を開始する</div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="mini_card hover_bg">
            <div className="space-y-1">
              <div className="font-semibold">タイマーモード</div>
              <div className="text-sm text-muted-foreground">
                タイマーモードでは，予め自分で定めた時間内で学習をする場合におすすめです。
              </div>
            </div>
          </div>
          <div className="mini_card hover_bg">
            <div className="space-y-1">
              <div className="font-semibold">ストップウォッチモード</div>
              <div className="text-sm text-muted-foreground">
                ストップウォッチモードでは，どれだけ学習するかを未だ定めていない場合におすすめです。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
