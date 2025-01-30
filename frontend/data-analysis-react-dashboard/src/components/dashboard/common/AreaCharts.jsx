import React from 'react';

const AreaCharts = ({ children }) => {
    return (
        <section className="content-area-charts">
            {children} {/* Render any child components passed to AreaCharts */}
        </section>
    );
}

export default AreaCharts;
