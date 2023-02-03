using MultipliableMatrices
using Documenter

DocMeta.setdocmeta!(MultipliableMatrices, :DocTestSetup, :(using MultipliableMatrices); recursive=true)

makedocs(;
    modules=[MultipliableMatrices],
    authors="G Jake Gebbie <ggebbie@whoi.edu>",
    repo="https://github.com/ggebbie/MultipliableMatrices.jl/blob/{commit}{path}#{line}",
    sitename="MultipliableMatrices.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://ggebbie.github.io/MultipliableMatrices.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/ggebbie/MultipliableMatrices.jl",
    devbranch="main",
)
