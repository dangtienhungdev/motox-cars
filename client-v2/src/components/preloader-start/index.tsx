const PreloaderStart = () => {
	return (
		<div id="preloader" className="preloader">
			<div className="animation-preloader">
				<div className="spinner" />
				<div className="txt-loading">
					<span data-text-preloader="F" className="letters-loading">
						F
					</span>
					<span data-text-preloader="O" className="letters-loading">
						O
					</span>
					<span data-text-preloader="R" className="letters-loading">
						R
					</span>
					<span data-text-preloader="D" className="letters-loading">
						D
					</span>
					<span data-text-preloader="H" className="letters-loading">
						H
					</span>
					<span data-text-preloader="A" className="letters-loading">
						A
					</span>
					<span data-text-preloader="T" className="letters-loading">
						T
					</span>
					<span data-text-preloader="H" className="letters-loading">
						H
					</span>
					<span data-text-preloader="H" className="letters-loading">
						H
					</span>
					<span data-text-preloader="A" className="letters-loading">
						A
					</span>
					<span data-text-preloader="N" className="letters-loading">
						N
					</span>
					<span data-text-preloader="H" className="letters-loading">
						H
					</span>
				</div>
				<p className="text-center">Loading</p>
			</div>
			<div className="loader">
				<div className="row">
					<div className="col-3 loader-section section-left">
						<div className="bg" />
					</div>
					<div className="col-3 loader-section section-left">
						<div className="bg" />
					</div>
					<div className="col-3 loader-section section-right">
						<div className="bg" />
					</div>
					<div className="col-3 loader-section section-right">
						<div className="bg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreloaderStart;
