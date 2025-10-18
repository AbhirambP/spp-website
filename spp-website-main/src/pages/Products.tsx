import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Package,
  CheckCircle,
  Ruler,
  Palette,
  Shield,
  Phone
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import bagsShowcase from "@/assets/ldpe-bags-showcase.png";
import polytheneSheets from "@/assets/polythene-sheets.jpg";
import polytheneSheetsNew from "@/assets/polythene-sheets-new.jpg";
import antistaticBagsNew from "@/assets/antistatic-bags-new.jpg";
import ldpePolytheneBagsNew from "@/assets/ldpe-polythene-bags-new.jpg";
import mediumBlackLdpeRolls from "@/assets/medium-black-ldpe-rolls.jpg";
import printedPolytheneBags from "@/assets/printed-polythene-bags.jpg";
import vciPolytheneBags from "@/assets/vci-polythene-bags.jpg";
import customPackagingSolutions from "@/assets/custom-packaging-solutions.jpg";
import selfSealCoversClear from "@/assets/self-seal-covers-clear.jpg";

const Products = () => {
  const products = [
    {
      name: "LDPE Polythene Bags",
      description: "Premium quality Low Density Polyethylene bags for diverse packaging applications.",
      image: polytheneSheets,
      specifications: [
        "Types: Plain & Gusseted",
        "Thickness: Multiple gauge options as per requirement",
        "Sizes: Fully customized as per client requirements",
        "Colors: Clear or Natural or Transparent or White, Black & Custom colors"
      ],
      applications: ["Pharmaceuticals", "Food & beverages", "Industrial packaging", "Electronic & components", "Retail", "Textile", "Others"]
    },
    {
      name: "Antistatic Polythene Bags",
      description: "Static-dissipative packaging solutions for Pharma products & electronic components ensuring safety & reliability.",
      image: antistaticBagsNew,
      specifications: [
        "Types: Plain & Gusseted",
        "Material: Anti-static LDPE compounds",
        "Surface resistivity: 10^10 to 10^11 ohms/sq",
        "Thickness: Multiple gauge options as per requirement",
        "Features: Static dissipative, transparent",
        "Color : White or clear, Black & custom colors"
      ],
      applications: ["Electronic components", "Pharmaceutical products", "Static-sensitive items", "Clean room packaging"]
    },
    {
      name: "Polythene Sheets",
      description: "Flexible polythene sheets for covering, wrapping, and protective applications.",
      image: polytheneSheetsNew,
      specifications: [
        "Thickness: Multiple gauge options as per requirement",
        "Colors: Clear or Natural or Transparent or White, Black & Custom colors",
        "Features: Puncture resistant, heat sealable"
      ],
      applications: ["Pharmaceuticals", "Industrial", "Agriculture", "Food & beverages", "Textile", "Others"]
    },
    {
      name: "Rolls",
      description: "Continuous polythene film rolls for automated packaging and industrial processes.",
      image: mediumBlackLdpeRolls,
      specifications: [
        "Width: As per requirement",
        "Thickness: Multiple gauge options as per requirement",
        "Color: White or Clear, Black & custom colors",
        "Form: Continuous rolls (with or without core)",
        "Features: High clarity, puncture resistant"
      ],
      applications: ["Automated packaging", "Industrial wrapping", "Food processing", "Manufacturing lines"]
    },
    {
      name: "Printed Polythene Bags",
      description: "High-quality printed polythene bags customized in any color with your logo, address, PCB number, and thickness for a professional brand identity",
      image: printedPolytheneBags,
      specifications: [
        "Types: Plain & Gusseted",
        "Colors: Clear or Natural or Transparent or White, Black & Custom colors"
      ],
      applications: ["Retail packaging", "Promotional bags", "Brand marketing", "Product identification"]
    },
    {
      name: "VCI Polythene Bags",
      description: "Also called anti-rustic bags. Provides corrosion protection for metal parts during storage & transport",
      image: vciPolytheneBags,
      specifications: [
        "VCI compounds: Vapor corrosion inhibitors",
        "Protection period: Up to 1 year",
        "Thickness: Multiple gauge options as per requirement",
        "Color: White or clear, Black & custom colors",
        "Metals protected: Steel, copper, aluminum"
      ],
      applications: ["Metal parts storage", "Automotive components", "Industrial equipment", "Export packaging"]
    },
    {
      name: "Custom Packaging Solutions",
      description: "Custom LDPE packaging solutions tailored to any size, color, and thickness to meet your exact requirements",
      image: customPackagingSolutions,
      specifications: [
        "Type: Plain, Gusseted, Antistatic, Non-Antistatic, Printed, Sheets, Rolls",
        "Thickness: Multiple gauge options as per requirement",
        "Print capability: Any color"
      ],
      applications: ["Pharmaceuticals", "Industrial", "Electronics", "Food & beverages", "Textiles", "Cosmetics", "Agriculture", "Retail", "Others"]
    },
    {
      name: "Self Seal Covers",
      description: "Convenient self-sealing polythene covers with adhesive strips for quick and secure packaging.",
      image: selfSealCoversClear,
      specifications: [
        "Material: Self-adhesive LDPE",
        "Sizes: Fully customized as per client requirements",
        "Features: Easy peel, secure seal",
        "Applications: Product protection"
      ],
      applications: ["Product protection", "Mailing", "Archive storage"]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Quality Assured",
      description: "All products manufactured under ISO 9001:2015 quality management system"
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Custom Colors",
      description: "Wide range of standard and custom colors to match your brand requirements"
    },
    {
      icon: <Ruler className="w-6 h-6 text-primary" />,
      title: "Custom Sizes",
      description: "Flexible manufacturing to produce bags in any size as per your specifications"
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Food grade & Pharma grade materials",
      description: "All materials comply with food grade and pharmaceutical grade standards for safe packaging"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={bagsShowcase}
        altText="LDPE Products Showcase"
      >
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            <Package className="w-4 h-4 mr-2" />
            Premium LDPE Products
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Product Range
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive selection of high-quality LDPE polythene bags designed for
            pharmaceutical, industrial, and food-grade applications.
          </p>
        </div>
      </HeroSection>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive selection of high-quality LDPE polythene bags designed for diverse applications.
            </p>
          </div>

          <div className="flex flex-col gap-8 items-center justify-center w-full">
            {products.map((product, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow w-full max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 break-words">
                <div className="grid w-full max-w-full lg:grid-cols-3 gap-6">
                  {/* Product Image */}
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted w-full max-w-full max-h-48 sm:max-h-64 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="block max-w-full max-h-44 sm:max-h-56 w-auto h-auto object-contain m-auto"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="lg:col-span-2">
                    <CardHeader className="break-words max-w-full text-left">
                      <CardTitle className="text-2xl text-foreground break-words max-w-full text-left hyphens-auto">{product.name}</CardTitle>
                      <p className="text-muted-foreground break-words max-w-full text-left hyphens-auto">{product.description}</p>
                    </CardHeader>
                    <CardContent className="break-words max-w-full text-left">
                      <div className="grid lg:grid-cols-2 gap-8 break-words max-w-full text-left">
                        {/* Specifications */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                          <ul className="space-y-2">
                            {product.specifications.map((spec, specIndex) => (
                              <li key={specIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm break-words max-w-full hyphens-auto">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applications */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                          <div className="flex flex-wrap gap-2 break-words max-w-full">
                            {product.applications.map((app, appIndex) => (
                              <Badge key={appIndex} variant="secondary" className="text-xs break-words max-w-full">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-border break-words max-w-full">
                        <Button asChild wrap className="hero-gradient w-full max-w-full break-words whitespace-normal text-center text-xs sm:text-sm md:text-base">
                          <Link to="/contact#quote" className="w-full max-w-full break-words whitespace-normal text-center flex flex-wrap items-center justify-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span className="break-words max-w-full hyphens-auto">Request Quote for {product.name}</span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Product Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every product we manufacture comes with these standard features and benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experienced team can develop custom LDPE packaging solutions
            tailored to your specific requirements and industry standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Discuss Requirements
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/quality">
                <CheckCircle className="w-5 h-5 mr-2" />
                View Quality Standards
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;