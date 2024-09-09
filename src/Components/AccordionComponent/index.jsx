import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { AccordionBodyContainer, AccordionContainer } from "./styled";
import { motion } from "framer-motion";

const AccordionComponent = () => {
  const [activeAccordion, setActiveAccordion] = useState("0");

  const handleToggle = (id) => {
    setActiveAccordion(id[0] === activeAccordion ? null : id[0]);
  };

  const variants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="section-header">
        <div className="section-label">Q&A</div>
        <div className="section-title">Frequently Asked Questions</div>
      </div>
      <AccordionContainer>
        <Accordion
          preExpanded={[activeAccordion]}
          onChange={handleToggle}
          allowZeroExpanded={true}
        >
          {[
            {
              id: "0",
              question: "What is need of solar panels cleaning ?",
              answer:
                `There are a couple of reasons why solar panels need to be cleaned regularly:
                - Efficiency: Dirt, dust, and debris buildup on the panels can block sunlight from reaching the solar cells, which reduces their efficiency in converting sunlight into electricity. Studies show this can lead to a loss of 7% or more in energy production annually.
                - Durability: A buildup of grime on the panels can also trap heat, which can damage the solar cells and shorten their lifespan. Regular cleaning helps to prevent this degradation.
                - Maintain your warranty: Some solar panel warranties require that the panels be cleaned regularly.
                - Improve aesthetics: Clean panels just look better!
                - Allow for inspections: A buildup of dirt can make it difficult to inspect the panels for damage.
                So, while solar panels are relatively low-maintenance, regular cleaning is an important part of keeping them operating at peak efficiency and ensuring a good return on your investment.`,
            },
            {
              id: "1",
              question: "What is frequency time of cleaning solar panel?",
              answer:
                `The frequency of solar panel cleaning depends on the rate of dust accumulation. Some installations may require cleaning as frequently as every ten days, while others may only necessitate cleaning every twenty to thirty days. A key indicator for cleaning is a noticeable decline in energy generation efficiency, typically exceeding 7-10%. Our data suggests that a majority (approximately 50%) of our clients benefit from bi-weekly cleaning (twice per month) at the 15-day mark. However, other clients prefer a monthly cleaning schedule.`,
            },
            {
              id: "2",
              question: "How to Clean Solar Panel ?",
              answer:
                `Professional cleaning with specialized tools offers the most effective and safe method for maintaining solar panel efficiency. While seemingly convenient, DIY methods like squeegees can cause scratches, and water hoses alone may not achieve a thorough clean, leading to wasted water and time. Pressure washers are strictly contraindicated due to the high water pressure potentially damaging both the glass and the delicate solar cells within the panels.`,
            },
            {
              id: "3",
              question: "Which is best time to clean solar panels",
              answer:
                `The ideal time to clean solar panels involves balancing two factors: cool panel temperature and low light conditions. Here's a breakdown of why these factors matter and when they converge for optimal cleaning:
                - Cool Panel Temperature: Hot panels can be susceptible to thermal shock when cleaned with cold water, potentially causing cracks. Therefore, avoiding cleaning during the hottest part of the day is crucial.
                - Low Light Conditions: Cleaning with direct sunlight hitting the panels can lead to rapid water evaporation, leaving behind mineral deposits that can reduce efficiency.
                - Early Morning: Panels are still cool from the night and haven't begun generating significant electricity yet.
                - Late Afternoon: Sun's intensity weakens, and panels start to cool down.`,
            },
            {
              id: "4",
              question: "Why professional cleaning for solar power plant?",
              answer:
                `Here's why professional cleaning is often recommended for solar power plants:
                - Expertise and Equipment: Professionals possess the knowledge and experience to clean solar panels safely and effectively. They understand the delicate nature of the panels and use specialized cleaning equipment designed to remove dirt and debris without causing scratches or damage.
                - Safety: Cleaning solar panels, especially on large-scale power plants, can involve working at heights. Professionals are trained in fall protection and other safety protocols to minimize risk.
                - Efficiency and Time Savings: Professionals have the experience and equipment to clean panels quickly and efficiently, minimizing downtime for your solar power plant. This translates to maximized energy production and return on investment.
                - Thorough Cleaning: Professionals use specialized cleaning solutions and techniques to ensure a complete and thorough cleaning, removing not just visible dirt but also stubborn grime and bird droppings that can significantly impact efficiency.
                - Warranty Compliance: Some solar panel warranties require professional cleaning at specific intervals. Hiring professionals ensures you meet these requirements and don't jeopardize your warranty coverage.
                - Peace of Mind: Hiring professionals allows you to focus on other aspects of your business while having confidence that your solar power plant is being maintained optimally.
                While DIY cleaning might seem like a cost-saving option for smaller setups, the benefits of professional cleaning, particularly for large-scale power plants, often outweigh the initial cost.`,
            },
          ].map(({ id, question, answer }) => (
            <AccordionItem uuid={id} key={id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="accordion-main-title">{`${parseInt(id) + 1}. ${question}`}</span>
                  {activeAccordion === id ? (
                    <FaChevronUp size={18} />
                  ) : (
                    <FaChevronDown size={18} />
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <motion.div
                  initial="closed"
                  animate={activeAccordion === id ? "open" : "closed"}
                  variants={variants}
                >
                  <AccordionBodyContainer>
                    <div className="section-content">{answer}</div>
                  </AccordionBodyContainer>
                </motion.div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionContainer>
    </>
  );
};

export default AccordionComponent;
