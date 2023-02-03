var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = MultipliableMatrices","category":"page"},{"location":"#MultipliableMatrices","page":"Home","title":"MultipliableMatrices","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for MultipliableMatrices.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [MultipliableMatrices]","category":"page"},{"location":"#Base.Matrix-Tuple{T} where T<:AbstractMultipliableMatrix","page":"Home","title":"Base.Matrix","text":"function Matrix(A::MultipliableMatrix)\n\nExpand A into array form\nUseful for tests, display\npp. 193, Hart\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.Diagonal-Tuple{AbstractVector, AbstractVector, AbstractVector}","page":"Home","title":"LinearAlgebra.Diagonal","text":"function Diagonal(v::AbstractVector,r::Unitful.Unitlike,d::Unitful.Unitlike; exact = false)\n\nConstruct diagonal matrix with units where the diagonal has elements `v`.\nIf `v` has units, check that they conform with dimensional unit range `r`\n and dimensional unit domain `d`.\nLike `LinearAlgebra.Diagonal`, this extension is restricted to square matrices.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.DSVD","page":"Home","title":"MultipliableMatrices.DSVD","text":"DSVD <: Factorization\n\nMatrix factorization type of the dimensional singular value decomposition (DSVD) of a matrix A. This is the return type of dsvd(_), the corresponding matrix factorization function.\n\nIf F::DSVD is the factorization object, U, S, V and V⁻¹ can be obtained via F.U, F.S, F.V and F.V⁻¹, such that A = U * Diagonal(S) * V⁻¹. The singular values in S are sorted in descending order.\n\nIterating the decomposition produces the components U, S, and V.\n\nDifferences from SVD struct: Vt -> V⁻¹, U and V can have different types.\n\nFunctions available for DSVD: size, dsvdvals, inv.  Function available for SVD that would be good to have to DSVD: ldiv!, transpose.  ```\n\n\n\n\n\n","category":"type"},{"location":"#MultipliableMatrices.EndomorphicMatrix","page":"Home","title":"MultipliableMatrices.EndomorphicMatrix","text":"struct EndomorphicMatrix\n\nMaps dimensioned vector space to itself.\nEquivalent unit (dimensional) range and domain.\n\nFields\n\nnumbers: numerical (dimensionless) matrix\nunitrange: unit (dimensional) range in terms of units, and also equal the unit (dimensional) domain\nexact: geometric (true) or algebraic (false) interpretation\n\n\n\n\n\n","category":"type"},{"location":"#MultipliableMatrices.EndomorphicMatrix-Tuple{Any, Any}","page":"Home","title":"MultipliableMatrices.EndomorphicMatrix","text":"function EndomorphicMatrix\n\nConstructor with keyword argument `exact=false`.\nIf `exact` not specified, defaults to `false`.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.EndomorphicMatrix-Tuple{Matrix}","page":"Home","title":"MultipliableMatrices.EndomorphicMatrix","text":" EndomorphicMatrix(A)\n\nTransform array to EndomorphicMatrix type\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.EndomorphicMatrix-Tuple{T} where T<:Number","page":"Home","title":"MultipliableMatrices.EndomorphicMatrix","text":"function EndomorphicMatrix(A::T) where T <: Number\n\nSpecial case of a scalar. Must be dimensionless.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.LeftUniformMatrix","page":"Home","title":"MultipliableMatrices.LeftUniformMatrix","text":"struct LeftUniformMatrix\n\nLeft uniform matrix: output of matrix has uniform units\n\nFields\n\nnumbers: numerical (dimensionless) matrix\nunitrange:  uniform dimensional range expressed as a single unit\nunitdomain: dimensional domain (Vector)\nexact: geometric (true) or algebraic (false) interpretation\n\n\n\n\n\n","category":"type"},{"location":"#MultipliableMatrices.MultipliableMatrix","page":"Home","title":"MultipliableMatrices.MultipliableMatrix","text":"struct MultipliableMatrix\n\nMatrices with units that are physically reasonable,\ni.e., more than just an array of values with units.\n\nUnits are consistent with many linear algebraic manipulations, including multiplication.\n\nHart (1995) suggests that these matrices simply be called \"matrices\", and that matrices with dimensional values that cannot be multiplied should be called \"arrays.\"\n\nFields\n\nnumbers: numerical (dimensionless) matrix\nunitrange: dimensional range in terms of units\nunitdomain: dimensional domain in terms of units\nexact: geometric (true) or algebraic (false) interpretation\n\n\n\n\n\n","category":"type"},{"location":"#MultipliableMatrices.MultipliableMatrix-Tuple{Any, Any, Any}","page":"Home","title":"MultipliableMatrices.MultipliableMatrix","text":"MultipliableMatrix(numbers,unitrange,unitdomain;exact=false)\n\nConstructor where `exact` is a keyword argument. One may construct a MultipliableMatrix without specifying exact, in which case it defaults to `false`.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.RightUniformMatrix","page":"Home","title":"MultipliableMatrices.RightUniformMatrix","text":"struct RightUniformMatrix\n\nRight uniform matrix: input of matrix must have uniform units\n\nFields\n\nnumbers: numerical (dimensionless) matrix\nunitrange::Vector:  unit (dimensional) range\nunitdomain: uniform dimensional domain expressed as a single unit\nexact: geometric (true) or algebraic (false) interpretation\n\n\n\n\n\n","category":"type"},{"location":"#MultipliableMatrices.SquarableMatrix","page":"Home","title":"MultipliableMatrices.SquarableMatrix","text":"struct SquarableMatrix\n\nAn squarable matrix is one where 𝐀² is defined.\nUnit (dimensional) range and domain are parallel.\nKey for solving difference and differential equations.\nHave eigenstructure.\n\nFields\n\nnumbers: numerical (dimensionless) matrix\nunitrange: unit (dimensional) range\nΔunitdomain: shift to range that gives the domain\nexact: geometric (true) or algebraic (false) interpretation\n\n\n\n\n\n","category":"type"},{"location":"#MultipliableMatrices.UniformMatrix","page":"Home","title":"MultipliableMatrices.UniformMatrix","text":"struct UniformMatrix\n\nUniform matrix: All entries have the same units\n\nAttributes\n\nnumbers: numerical (dimensionless) matrix\nunitrange:  uniform unit (dimensional) range expressed as a single unit\nunitdomain: uniform unit (dimensional) domain expressed as a single unit\nexact: geometric (true) or algebraic (false) interpretation of matrix\n\n\n\n\n\n","category":"type"},{"location":"#MultipliableMatrices.UniformMatrix-Tuple{Any, Any, Any}","page":"Home","title":"MultipliableMatrices.UniformMatrix","text":"function UniformMatrix\n\nConstructor with keyword argument `exact=false`.\nIf `exact` not specified, defaults to `false`.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.UnitSymmetricMatrix","page":"Home","title":"MultipliableMatrices.UnitSymmetricMatrix","text":"struct UnitSymmetricMatrix\n\n`UnitSymmetricMatrix`s have units that are symmetric about the main diagonal and define weighted norms. \nDefinition: inverse dimensional range and dimensional domain are parallel.\nCalled \"dimensionally symmetric\" by Hart, 1995.\n\nFields\n\nnumbers: numerical (dimensionless) matrix\nunitrange: dimensional range in terms of units, this is also the domain\nΔunitdomain: shift to range that gives the domain\nexact: geometric (true) or algebraic (false) interpretation\n\n\n\n\n\n","category":"type"},{"location":"#Base.:*-Union{Tuple{T1}, Tuple{T2}, Tuple{T1, T2}} where {T2<:AbstractMultipliableMatrix, T1<:AbstractMultipliableMatrix}","page":"Home","title":"Base.:*","text":"function *(A,B)\n\nMatrix-matrix multiplication with units/dimensions.\nA*B represents two successive transformations.\nUnitrange of B should equal domain of A in geometric interpretation.\nUnitrange of B should be parallel to unitdomain of A in algebraic interpretation.\n\nNote: special matrix forms revert to a product that is a MultipliableMatrix.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:*-Union{Tuple{T1}, Tuple{T2}, Tuple{T1, T2}} where {T2<:Number, T1<:AbstractMultipliableMatrix}","page":"Home","title":"Base.:*","text":"function *(A::MultipliableMatrix,b)\n\nMatrix-scalar multiplication with units/dimensions.\nMust account for change in the unitrange when the\n scalar has units.\nHere, take product of dimension of the scalar and the unitrange.\nAlternatively, divide the domain by the dimension of the scalar. \nMatrix-scalar multiplication is commutative.\nResult is `exact` if input matrix is exact and scalar is dimensionless. \nNote: special matrix forms revert to a product that is a MultipliableMatrix.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:*-Union{Tuple{T}, Tuple{T, AbstractVector}} where T<:AbstractMultipliableMatrix","page":"Home","title":"Base.:*","text":"function *(A::AbstractMultipliableMatrix,b)\n\nMatrix-vector multiplication with units/dimensions.\nUnitful also handles this case, but here there is added\nefficiency in the storage of units/dimensions by accounting\nfor the necessary structure of the matrix. Check.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:+-Union{Tuple{T1}, Tuple{T2}, Tuple{AbstractMultipliableMatrix{T1}, AbstractMultipliableMatrix{T2}}} where {T2, T1}","page":"Home","title":"Base.:+","text":"function +(A,B)\n\nMatrix-matrix addition with units/dimensions.\nA+B requires the two matrices to have dimensional similarity.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:--Union{Tuple{T1}, Tuple{T2}, Tuple{AbstractMultipliableMatrix{T1}, AbstractMultipliableMatrix{T2}}} where {T2, T1}","page":"Home","title":"Base.:-","text":"function -(A,B)\n\nMatrix-matrix subtraction with units/dimensions.\nA-B requires the two matrices to have dimensional similarity.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:\\-Tuple{AbstractMultipliableMatrix, AbstractVector}","page":"Home","title":"Base.:\\","text":" function left divide\n\n Left divide of Multipliable Matrix.\n Reverse mapping from unitdomain to range.\n Is `exact` if input is exact.\n\n\n\n\n\n","category":"method"},{"location":"#Base.:\\-Union{Tuple{T}, Tuple{LinearAlgebra.LU{T, <:AbstractMultipliableMatrix{T}, Vector{Int64}}, AbstractVector}} where T<:Number","page":"Home","title":"Base.:\\","text":"function ldiv(F::LU{T,MultipliableMatrix{T},Vector{Int64}}, B::AbstractVector) where T<:Number\n\nPerform matrix left divide on LU factorization object,\nwhere LU object contains unit information.\nDoesn't require LeftUniformMatrix.\n\n\n\n\n\n","category":"method"},{"location":"#Base.getindex-Union{Tuple{T}, Tuple{T, Union{Colon, UnitRange}, Int64}} where T<:AbstractMultipliableMatrix","page":"Home","title":"Base.getindex","text":"function getindex(A::AbstractMultipliableMatrix,i::Integer,j::Integer)\n\nRecover element (i,j) of a AbstractMultipliableMatrix.\nPart of the AbstractArray interface.\n\n#Input\n\nA::AbstractMultipliableMatrix\ni::Integer: row index\nj::Integer: column index\n\n#Output\n\nQuantity: numerical value and units (for vector)\nAbstractMultipliableMatrix: for matrix output\n\n\n\n\n\n","category":"method"},{"location":"#Base.getproperty-Union{Tuple{T}, Tuple{LinearAlgebra.LU{T, <:AbstractMultipliableMatrix, Vector{Int64}}, Symbol}} where T","page":"Home","title":"Base.getproperty","text":"function getproperty(F::LU{T,<:AbstractMultipliableMatrix,Vector{Int64}}, d::Symbol) where T\n\nExtend LinearAlgebra.getproperty for AbstractMultipliableMatrix.\n\nLU factorization stores L and U together.\nExtract L and U while keeping consistent\nwith dimensional domain and range.\n\n\n\n\n\n","category":"method"},{"location":"#Base.hcat-Tuple{AbstractMultipliableMatrix, AbstractMultipliableMatrix}","page":"Home","title":"Base.hcat","text":"function hcat(A,B)\n\nModeled after function `HORIZONTAL` (pp. 202, Hart, 1995).\n\n\n\n\n\n","category":"method"},{"location":"#Base.inv-Tuple{T} where T<:AbstractMultipliableMatrix","page":"Home","title":"Base.inv","text":" function inv\n\n Inverse of Multipliable Matrix.\n Only defined for nonsingular matrices.\n Inverse reverses mapping from unitdomain to range.\n Is `exact` if input is exact.\n\nHart, pp. 205.\n\n\n\n\n\n","category":"method"},{"location":"#Base.inv-Union{Tuple{LinearAlgebra.Eigen{T, V, S, U}}, Tuple{T}, Tuple{V}, Tuple{S}, Tuple{U}} where {U<:(AbstractVector), S<:AbstractMultipliableMatrix, V, T<:Number}","page":"Home","title":"Base.inv","text":"Extend inv for Eigen factorizations of MultipliableMatrixs.     Only defined for matrices with uniform units (pp. 101, Hart, 1995). \n\n\n\n\n\n","category":"method"},{"location":"#Base.setindex!-Union{Tuple{T}, Tuple{T, Any, Int64, Int64}} where T<:AbstractMultipliableMatrix","page":"Home","title":"Base.setindex!","text":"function setindex!(A::MultipliableMatrix,v,i,j)\n\nSet element (i,j) of a MultipliableMatrix.\nPart of the AbstractArray interface.\n\n#Input\n\nA::AbstractMultipliableMatrix\nv: new value\ni::Integer: row index\nj::Integer: column index\n\n#Output\n\nQuantity: numerical value and units\n\n\n\n\n\n","category":"method"},{"location":"#Base.transpose-Tuple{AbstractMultipliableMatrix}","page":"Home","title":"Base.transpose","text":"function transpose\n\nDefined by condition `A[i,j] = transpose(A)[j,i]`.\nNot analogous to function for dimensionless matrices.\n\nHart, pp. 205.\n\n\n\n\n\n","category":"method"},{"location":"#Base.vcat-Tuple{AbstractMultipliableMatrix, AbstractMultipliableMatrix}","page":"Home","title":"Base.vcat","text":"function vcat(A,B)\n\nModeled after function `VERTICAL` (pp. 203, Hart, 1995).\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.cholesky-Tuple{AbstractMultipliableMatrix}","page":"Home","title":"LinearAlgebra.cholesky","text":"function cholesky(A::AbstractMultipliableMatrix)\n\nCholesky decomposition extended for matrices with units.\nRequires unit (or dimensionally) symmetric matrix.\nFunctions available for LinearAlgebra.Cholesky objects: `size`, ``, `inv`, `det`, `logdet` and `isposdef`.\nFunctions available for MultipliableMatrices.Cholesky objects: `size`, `det`, and `isposdef`.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.det-Tuple{T} where T<:AbstractMultipliableMatrix","page":"Home","title":"LinearAlgebra.det","text":"function det\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.diag-Union{Tuple{AbstractMultipliableMatrix{T}}, Tuple{T}} where T<:Number","page":"Home","title":"LinearAlgebra.diag","text":"function diag(A::AbstractMultipliableMatrix)\n\nDiagonal elements of matrix with units.\n\nUsual LinearAlgebra.diag function is not working due to different type elements on diagonal\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.diagm-Tuple{AbstractVector, AbstractVector, AbstractVector}","page":"Home","title":"LinearAlgebra.diagm","text":"function diagm(v::AbstractVector,r::Unitful.Unitlike,d::Unitful.Unitlike; exact = false)\n\nConstruct diagonal matrix with units where the diagonal has elements `v`.\nIf `v` has units, check that they conform with dimensional unit range `r`\n and dimensional unit domain `d`. Works for square or non-square matrices.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.eigen-Tuple{T} where T<:AbstractMultipliableMatrix","page":"Home","title":"LinearAlgebra.eigen","text":"function eigen(A::T;permute::Bool=true, scale::Bool=true, sortby::Union{Function,Nothing}=eigsortby) where T <: AbstractMultipliableMatrix\n\nThin wrapper for `MultipliableMatrices.eigen` with same keyword arguments as `LinearAlgebra.eigen`.\nThere are multiple ways to distribute the units amongst the values and vectors.\nHere, physical intuition and the equation 𝐀𝐱 = λ𝐱\ndictate that the units of the eigenvectors are equal to the unit domain of 𝐀 (pp. 206, Hart, 1995).\nOnly squarable matrices have eigenstructure (pp. 96, Hart, 1995).\nIdeally the AbstractArray interface would automatically handle `eigen`,\nbut there is an unsolved issue with Unitful conversions.\nThe following functions are available for `Eigen` objects:  [`det`](@ref), [`inv`](@ref) and [`isposdef`](@ref). Some are restricted to uniform matrices.\n`eigvals` of Eigen struct also available.\n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.isposdef-Union{Tuple{LinearAlgebra.Eigen{T, V, S, U}}, Tuple{T}, Tuple{V}, Tuple{S}, Tuple{U}} where {U<:(AbstractVector), S<:AbstractMultipliableMatrix, V, T<:Number}","page":"Home","title":"LinearAlgebra.isposdef","text":"Extend isposdef for Eigen factorizations of MultipliableMatrixs.     Should the units be stripped out of the function?     Only defined for matrices with uniform units (pp. 101, Hart, 1995). \n\n\n\n\n\n","category":"method"},{"location":"#LinearAlgebra.lu-Union{Tuple{AbstractMultipliableMatrix{T}}, Tuple{T}} where T<:Number","page":"Home","title":"LinearAlgebra.lu","text":"function lu(A::AbstractMultipliableMatrix{T})\n\nExtend `lu` factorization to AbstractMultipliableMatrix.\nRelated to Gaussian elimination.\nStore dimensional domain and range in \"factors\" attribute\neven though this is not truly a MultipliableMatrix.\nReturns `LU` type in analogy with `lu` for unitless matrices.\nBased on LDU factorization, Hart, pp. 204.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.BestMultipliableMatrix-Tuple{AbstractMatrix, AbstractVector, AbstractVector}","page":"Home","title":"MultipliableMatrices.BestMultipliableMatrix","text":"function BestMultipliableMatrix(numbers,unitrange,unitdomain;exact=false)\n\nWhat kind of Multipliable Matrix is the best representation?\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.BestMultipliableMatrix-Tuple{Matrix}","page":"Home","title":"MultipliableMatrices.BestMultipliableMatrix","text":" BestMultipliableMatrix(A::Matrix)\n\nTransform array to a type <: AbstractMultipliableMatrix.\nFinds best representation amongst\nUniformMatrix, EndomorphicMatrix, or MultipliableMatrix.\nAssumes `exact=false`\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.MMatrix","page":"Home","title":"MultipliableMatrices.MMatrix","text":"MMatrix (Multipliable Matrix): shortcut for `BestMultipliableMatrix`\n\n\n\n\n\n","category":"function"},{"location":"#MultipliableMatrices.convert_unitdomain!-Tuple{AbstractMultipliableMatrix, Vector}","page":"Home","title":"MultipliableMatrices.convert_unitdomain!","text":"function convert_unitdomain!(A, newdomain)\n\nIn-place conversion of unit (dimensional) domain.\nMatrix Type not permitted to change.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.convert_unitdomain-Tuple{AbstractMultipliableMatrix, Vector}","page":"Home","title":"MultipliableMatrices.convert_unitdomain","text":"function convert_unitdomain(A, newdomain)\n\nWhen using the geometric interpretation of matrices,\nit is useful to convert the dimensional domain of the\nmatrix to match the expected vectors during multiplication.\nHere we set the matrix to `exact=true` after this step.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.convert_unitrange!-Tuple{AbstractMultipliableMatrix, Vector}","page":"Home","title":"MultipliableMatrices.convert_unitrange!","text":"function convert_unitrange!(A, newrange)\n\nIn-place conversion of unit (dimensional) range.\nMatrix Type not permitted to change.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.convert_unitrange-Tuple{AbstractMultipliableMatrix, Vector}","page":"Home","title":"MultipliableMatrices.convert_unitrange","text":"function convert_unitrange(A, newrange)\n\nWhen using the geometric interpretation of matrices,\nit is useful to convert the dimensional range of the\nmatrix to match the desired output of multiplication.\nHere we set the matrix to `exact=true` after this step.\nPermits MatrixType to change.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.dimensionless-Tuple{T} where T<:AbstractMultipliableMatrix","page":"Home","title":"MultipliableMatrices.dimensionless","text":" function dimensionless(A)\n\n Not all dimensionless matrices have\n dimensionless domain and range.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.dottable-Tuple{Any, Any}","page":"Home","title":"MultipliableMatrices.dottable","text":"function dottable(a,b)\n\nAre two quantities dimensionally compatible\nto take a dot product?\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.dsvd-Tuple{AbstractMultipliableMatrix, AbstractMultipliableMatrix, AbstractMultipliableMatrix}","page":"Home","title":"MultipliableMatrices.dsvd","text":"function dsvd(A::AbstractMultipliableMatrix,Prange::UnitSymmetricMatrix,Pdomain::UnitSymmetricMatrix;full=false,alg::LinearAlgebra.Algorithm = LinearAlgebra.default_svd_alg(A.numbers)) \n\nDimensional singular value decomposition (DSVD).\nAppropriate version of SVD for non-uniform matrices.\n`svd` can be computed for `Number`s, `Adjoint`s, `Tranpose`s, and `Integers`; `dsvd` doesn't yet implement these.\n\nInput\n\nA::AbstractMultipliableMatrix\nPr::UnitSymmetricMatrix: square matrix defining norm of range\nPd::UnitSymmetricMatrix: square matrix defining norm of domain\nfull=false: optional argument\nalg: optional argument for algorithm\n\nOutput:\n\nF::DSVD: Dimensional SVD object with units that can be deconstructed\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.endomorphic-Tuple{Matrix}","page":"Home","title":"MultipliableMatrices.endomorphic","text":"function endomorphic(A)::Bool\n\nEndomorphic matrices have a particular structure\n of the units/dimensions in the array.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.exact-Tuple{T} where T<:AbstractMultipliableMatrix","page":"Home","title":"MultipliableMatrices.exact","text":"function exact(A)\n\nexact=true: geometric interpretation of unitdomain and unitrange\nexact=false: algebraic interpretation\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.identitymatrix-Tuple{Any}","page":"Home","title":"MultipliableMatrices.identitymatrix","text":"function identitymatrix(dimrange)\n\nInput: dimensional (unit) range.\n`A + I` only defined when `endomorphic(A)=true`\nWhen accounting for units, there are many identity matrices.\nThis function returns a particular identity matrix\ndefined by its dimensional range.\nHart, pp. 200.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.ldiv!-Tuple{AbstractMultipliableMatrix, AbstractVector}","page":"Home","title":"MultipliableMatrices.ldiv!","text":" function ldiv!\n\n In-place left division by a Multipliable Matrix.\n Reverse mapping from unitdomain to range.\n Is `exact` if input is exact.\n\nProblem: b changes type unless endomorphic\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.left_uniform-Tuple{Union{LeftUniformMatrix, UniformMatrix}}","page":"Home","title":"MultipliableMatrices.left_uniform","text":"function left_uniform(A)\n\nDefinition: uniform unitrange of A\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.multipliable-Tuple{Matrix}","page":"Home","title":"MultipliableMatrices.multipliable","text":"function multipliable(A)::Bool\n\nIs an array multipliable?\nIt requires a particular structure of the units/dimensions in the array.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.parallel-Tuple{Any, Any}","page":"Home","title":"MultipliableMatrices.parallel","text":"function parallel\n\nVector a is dimensionally parallel to vector b if\nthey have the same length and a consistent dimensional\nchange relates corresponding components.\nGuaranteed if two vectors are dimensionally similar.\nTrue for scalars in all cases. \n\npp. 188, Hart\nNote: Hart uses ≈, but this conflicts with an existing Julia function.\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.right_uniform-Tuple{Union{RightUniformMatrix, UniformMatrix}}","page":"Home","title":"MultipliableMatrices.right_uniform","text":"function right_uniform(A)\n\nDoes the unitdomain of A have uniform dimensions?\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.similarity-Tuple{Any, Any}","page":"Home","title":"MultipliableMatrices.similarity","text":"function similarity(a,b)::Bool\n\nDimensional similarity of vectors, a binary relation\nRead \"a has the same dimensional form as b\"\n`a` and `b` may still have different units.\nA stronger condition than being parallel.\npp. 184, Hart\n\n\n\n\n\n","category":"method"},{"location":"#MultipliableMatrices.uniform-Tuple{T} where T<:Number","page":"Home","title":"MultipliableMatrices.uniform","text":"function uniform(a)\n\nIs the dimension of this quantity uniform?\n\nThere must be a way to inspect the Unitful type to answer this.\n\n\n\n\n\n","category":"method"}]
}
