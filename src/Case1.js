const DEFAULT_INSPECTOR_WIDTH = '550px';

export default function Case1() {
    return (
        <div className="div">
            {/*language=scss*/}
            <style jsx>{`
              .div {
                max-width: calc(${DEFAULT_INSPECTOR_WIDTH} - 200px);
              }
            `}</style>
        </div>
    );
}
