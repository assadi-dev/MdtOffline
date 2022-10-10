import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  EditPencilIcon,
  TrashIcon,
} from "../../../components/SVG";
import {
  Button,
  HoursSheetBody,
  HoursSheetHeaderRowBtn,
  HoursSheetpageHeader,
  HoursSheetRowAction,
  HoursSheetTable,
  HoursSheetTableAction,
  HoursSheetWrapper,
  OutlineBtnAction,
} from "./HoursSheet.styled";

const HoursSheet = () => {
  const [week, setWeek] = useState(56);

  const setWeekCounter = (type) => {
    type == "increment"
      ? setWeek((prevState) => (prevState += 1))
      : setWeek((prevState) => (prevState -= 1));
  };

  return (
    <>
      <HoursSheetWrapper>
        <HoursSheetpageHeader>
          <HoursSheetHeaderRowBtn>
            <button className="btn" onClick={() => setWeekCounter("decrement")}>
              <ChevronLeft />
            </button>{" "}
            <h2 className="HoursTitlepageHeader">SEMAINE {week}</h2>{" "}
            <button className="btn" onClick={() => setWeekCounter("increment")}>
              <ChevronRight />{" "}
            </button>
          </HoursSheetHeaderRowBtn>

          <p className="totalHour">Total: 0</p>
        </HoursSheetpageHeader>

        <HoursSheetBody>
          <HoursSheetRowAction>
            <div></div>
            <Button className="addBtn">Ajouter</Button>
          </HoursSheetRowAction>
          <HoursSheetTable>
            <thead>
              <tr>
                <th>Prise de service</th>
                <th>Fin de service</th>
                <th>Activité</th>
                <th>Durée</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10-10-2022 00:30</td>
                <td>10-10-2022 00:45</td>
                <td>test</td>
                <td>00:15</td>
                <td>
                  <HoursSheetTableAction>
                    <OutlineBtnAction className="edit">
                      {" "}
                      <EditPencilIcon />
                    </OutlineBtnAction>
                    <OutlineBtnAction className="delete">
                      {" "}
                      <TrashIcon />
                    </OutlineBtnAction>
                  </HoursSheetTableAction>
                </td>
              </tr>
            </tbody>
          </HoursSheetTable>
        </HoursSheetBody>
      </HoursSheetWrapper>
    </>
  );
};

export default HoursSheet;
