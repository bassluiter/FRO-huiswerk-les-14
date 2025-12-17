import './PageHeader.css'

function PageHeader({headerText, bgClr}) {

    return (
        <div className={`inner-header ${bgClr || ""}`}>
            <h1 className={"page-header"} >{headerText}</h1>
        </div>

    )
}
export default PageHeader