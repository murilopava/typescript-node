enum ClothSize {
    ExtraSmall = "PP",
    Small = "P",
    Medium = "M",
    Large = "G",
    ExtraLarge = "GG"
}

interface Cloth {
    color: string,
    size: string
}

const cloth: Cloth = {
    color: "green",
    size: ClothSize.Medium
}