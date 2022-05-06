const row = {depth: 2};

export default function Case2() {
    return (
        <div className="div">
            {/*language=scss*/}
            <style jsx>{`
              .div {
                padding-left: calc(${row.depth * 20}px + 0.25rem);
              }
            `}</style>
        </div>
    );
}
